const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = graphql

const StarType = require('./starType')
const TagType = require('./tagType')

const { starModules } = require('../../modules')
const { validatePrivilege } = require('../../utils/validatePrivilege')
const { UnauthorizedError } = require('../errors')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    stars: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        githubRepository: { type: GraphQLString },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        if (!validatePrivilege(args.username, req.profile)) {
          throw new UnauthorizedError()
        }
        return await starModules.findStars(args)
      },
    },
    starsOfTagsAndOperation: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        if (!validatePrivilege(args.username, req.profile)) {
          throw new UnauthorizedError()
        }
        return await starModules.findStars(args)
      },
    },
    starsWithTagOrOperation: {
      type: new GraphQLList(StarType),
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        tags: { type: GraphQLList(GraphQLString) },
      },
      async resolve(parentValue, args, req) {
        const { tags, username } = args
        if (!validatePrivilege(username, req.profile)) {
          throw new UnauthorizedError()
        }
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
