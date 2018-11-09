const { gql } = require('apollo-server')
const _ = require('lodash')

const db = require('../db/models/index')
const { findAllOrCreateIfNotExisted } = require('../db/modules/tags')

const starTypeDefs = gql`
  type Star {
    id: String!
    username: String!
    githubRepository: String!
    discription: String
    Tags: [Tag]
  }

`

const starResolvers = {
  Query: {
    getStar: async function() {
      const res = await db.Star.findAll({
        include: [{
          model:db.Tag,
          attributes: ['id', 'tagName'],
        }],
      })

      console.log(res)
      return res
    },
  },
  Mutation: {
    createStar: async (obj, args, context, info) => {
      const {
        username,
        githubRepository,
        description,
        tags,
      } = args

      const res = await db.sequelize.transaction(async (transaction) => {
        const newStar = await db.Star.create(args, { transaction })
        const tagsFromDB = await findAllOrCreateIfNotExisted(tags, transaction)
        console.log(newStar)
        await newStar.addTags(tagsFromDB, {
          transaction,
        })
        return newStar
      })
      return res
    },
  },
}

module.exports = {
  starTypeDefs,
  starResolvers,
}
