const _ = require('lodash')
const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = graphql


const starType = new GraphQLObjectType({
  name:  'StarType',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    githubRepository: { type: GraphQLNonNull(GraphQLString) },
    username: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    tags: {
      type: GraphQLList(require('./tagType')),
      resolve: async (parentValue) => {
        // console.log(parentValue)

        const res = _.map(parentValue.tags, (tag) => {
          return {
            tagName: tag,
          }
        })

        return res
      },
    },
  }),
})

module.exports = starType
