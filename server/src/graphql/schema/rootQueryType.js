const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull } = graphql

const StarType = require('./starType')
const TagType = require('./tagType')

const { starModules } = require('../../modules')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    // stars: {
    //   type: new GraphQLList(StarType),
    //   resolve() {
    //     return starModules.findStars({})
    //   },
    // },
    // starsOfUsername: {
    //   type: new GraphQLList(StarType),
    //   args: {
    //     username: { type: GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve(parentValue, args) {
    //     return starModules.findStars(args)
    //   },
    // },
    // starsOfRepository: {
    //   type: new GraphQLList(StarType),
    //   args: {
    //     githubRepository: { type: GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve(parentValue, args) {
    //     return starModules.findStars(args)
    //   },
    // },
    // starsOfTagsAndOperation: {
    //   type: new GraphQLList(StarType),
    //   args: {
    //     tags: { type: GraphQLList(GraphQLString) },
    //   },
    //   resolve(parentValue, args) {
    //     return starModules.findStars(args)
    //   },
    // },
    stars: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLString },
        githubRepository: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args) {
        const res = await starModules.findStars(args)
        return res
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
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args) {
        const { tags } = args
        return await starModules.findStarsWithTagOrOperation(tags)
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
