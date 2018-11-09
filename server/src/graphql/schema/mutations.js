const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } = graphql

const { StarModel } = require('../../models')

const StarType = require('./starType')

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
      resolve(parentValue, args) {
        const {
          username,
          githubRepository,
          description,
          tags,
        } = args
        return (new StarModel({ username, githubRepository, description, tags })).save()
      },
    },
  },
})

module.exports = mutation
