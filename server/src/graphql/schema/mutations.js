const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const _ = require('lodash')

const { starModules } = require('../../modules')

const StarType = require('./starType')

const { validatePrivilege } = require('../../utils/validatePrivilege')
const { UnauthorizedError, NotFoundError } = require('../errors')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addStar: {
      type: StarType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        githubRepository: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        if (!validatePrivilege(args.username, req.profile)) {
          throw new UnauthorizedError()
        }
        return await starModules.createStar(args)
      },
    },
    editStar: {
      type: StarType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        description: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        const star = await starModules.StarModel.findById(args.id)

        if (_.isNil(star)) {
          throw new NotFoundError()
        }

        if (!validatePrivilege(star.username, req.profile)) {
          throw new UnauthorizedError()
        }
        return await starModules.editStar(args)
      },
    },
    removeStar: {
      type: StarType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, args, req) {
        if (!validatePrivilege(args.username, req.profile)) {
          throw new UnauthorizedError()
        }
        return await starModules.deleteStar(args.id)
      },
    },
  },
})

module.exports = mutation
