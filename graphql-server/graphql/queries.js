const { gql } = require('apollo-server')

const queryTypeDefs = gql`  
  type Query {
    getStar: [Star]
    getTags: [Tag]
  }

  #  type Mutation {
  #   
  #  }
`


module.exports = {
  queryTypeDefs,
}
