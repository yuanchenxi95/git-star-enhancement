'use strict'

require('dotenv').config()

const fs = require('fs')
const join = require('path').join
const express = require('express')

const mongoose = require('mongoose')
const config = require('./config')

const models = join(__dirname, '/models')
const port = process.env.PORT || 3000
const app = express()

/**
 * Expose
 */

module.exports = app

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^].*\.js$/))
  .forEach(file => require(join(models, file)))

// Bootstrap routes
require('./express')(app)
require('./controllers')(app)
require('./graphql')(app)
require('./middlewares/errorHandler')(app)

function listen() {
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log('Express app started on port ' + port)
}

function connect () {
  mongoose.connect(config.mongodbURI, { useNewUrlParser: true })
  return mongoose.connection
}

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen)
