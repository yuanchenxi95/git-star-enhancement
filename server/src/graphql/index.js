'use strict'
module.exports = function (app) {

  const config = require('../config')
  const expressGraphQL = require('express-graphql')
  const schema = require('./schema/schema')

  app.use('/graphql', expressGraphQL({
    schema,
    graphiql: config.env === 'development',
  }))



}
