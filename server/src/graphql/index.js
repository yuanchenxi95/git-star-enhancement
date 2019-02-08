'use strict'
module.exports = function (app) {
  const expressGraphQL = require('express-graphql')

  const config = require('../config')
  const schema = require('./schema/schema')
  const { verifyToken }  = require('../passport/jwt')
  app.use('/graphql',
    verifyToken,
    expressGraphQL({
      schema,
      graphiql: config.env === 'development',
    })
  )



}
