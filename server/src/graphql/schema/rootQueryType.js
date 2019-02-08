const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql

const StarType = require('./starType')
const TagType = require('./tagType')

const { starModules } = require('../../modules')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    stars: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLString },
        githubRepository: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        return await starModules.findStars(args)
      },
    },
    starsOfTagsAndOperation: {
      type: new GraphQLList(StarType),
      args: {
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args) {
        return await starModules.findStars(args)
      },
    },
    starsWithTagOrOperation: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args) {
        const { tags, username } = args
        if (tags.length === 0) {
          return await starModules.findStars({ username })
        } else {
          return await starModules.findStarsWithTagOrOperation(username, tags)
        }
      },
    },
    tags: {
      type: new GraphQLList(TagType),
      args: {
        searchText: { type: GraphQLString },
      },
      async resolve(parentValue, args) {
        const { searchText } = args
        return await starModules.findAllTagsContainName(searchText)
      },
    },
  }),
})

module.exports = RootQuery
