const { gql } = require('apollo-server')


const tagTypeDefs = gql`
  type Tag {
    id: String!
    tagName: String!
    Stars: [Star]
  }

`

const tagResolvers = {
  Query: {
    getTags: async function() {

    },
  },
  Mutation: {

  },
}

module.exports = {
  tagTypeDefs,
  tagResolvers,
}
