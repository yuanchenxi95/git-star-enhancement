'use strict'

/**
 * Module dependencies.
 */

// const path = require('path')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const config = require('./config')


const env = process.env.NODE_ENV || 'development'


module.exports = function (app) {

  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512,
  }))

  // Configure CORS
  app.use(cors())

  // Static files middleware
  app.use('/public', express.static(config.root + 'build'))

  // bodyParser should be above methodOverride
  app.use(bodyParser.json({limit: '10mb'}))
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
  app.use(methodOverride())

  // use pug as view engine
  // app.set('views', path.join(__dirname, 'views'))
  // app.set('view engine', 'pug')


  if (env === 'development') {
    app.locals.pretty = true
  }
}
