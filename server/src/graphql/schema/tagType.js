const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = graphql

const { StarModel } = require('../../models')

const tagType = new GraphQLObjectType({
  name:  'TagType',
  fields: () => ({
    // id: { type: GraphQLID },
    tagName: { type: GraphQLNonNull(GraphQLString) },
    Stars: {
      type: GraphQLList(require('./starType')),
      resolve: async (parentValue) => {
        const res = await StarModel.find({
          tags: {
            '$in': parentValue.tagName,
          },
        })
        return res
      },
    },
  }),
})

module.exports = tagType
