const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } = graphql

const { starModules } = require('../../modules')

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
      async resolve(parentValue, args) {
        // TODO validate privilege
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
      async resolve(parentValue, args) {
        // TODO validate privilege
        return await starModules.editStar(args)
      },
    },
    removeStar: {
      type: StarType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, args) {
        // TODO validate privilege
        return await starModules.deleteStar(args.id)
      },
    },
  },
})

module.exports = mutation
