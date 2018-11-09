'use strict'
const { ApolloServer } = require('apollo-server')
const lodash = require('lodash')

const {
  makeExecutableSchema,
} = require('graphql-tools')
const db = require('./db/models/index')

// const { discountResolvers, discountSchema } = require('./graphql/discounts')
const { tagResolvers, tagTypeDefs } = require('./graphql/tags')
const { starResolvers, starTypeDefs } = require('./graphql/stars')
const { queryTypeDefs } = require('./graphql/queries')
const { mutationsTypeDefs } = require('./graphql/mutations')


const typeDefs = [starTypeDefs, tagTypeDefs, queryTypeDefs, mutationsTypeDefs]

const resolvers = {}
lodash.merge(resolvers, tagResolvers, starResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
//
// const executableSchema = mergeSchemas({
//   schemas,
//   resolvers,
// })

// used for authentication
const context = ({ req }) => {
  // console.log(req)
  // const user = false
  // if (user === false) {
  //   throw new Error('You need to be authenticated to access this schema!')
  // }
}


// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ schema: executableSchema, context })

// wait for db to sync
db.sequelize.sync().then(() => {
  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })

})
