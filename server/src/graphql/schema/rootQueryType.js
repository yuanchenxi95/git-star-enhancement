const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const StarType = require('./starType');
// const TagType = require('./tagType');

const { StarModel } = require('../../models')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    stars: {
      type: new GraphQLList(StarType),
      resolve() {
        return StarModel.find({})
      },
    },
    // song: {
    //   type: SongType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parentValue, { id }) {
    //     return Song.findById(id);
    //   }
    // },
    // lyric: {
    //   type: LyricType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parnetValue, { id }) {
    //     return Lyric.findById(id);
    //   }
    // }
  })
});

module.exports = RootQuery;
