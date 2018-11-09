const { gql } = require('apollo-server')

const mutationsTypeDefs = gql`
  type Mutation {
    createStar(
      username: String!
      githubRepository: String!
      description: String
      tags: [String]
    ): Star
  }
`


module.exports = {
  mutationsTypeDefs,
}
