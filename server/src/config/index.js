'use strict'

/**
 * Module dependencies.
 */

const { checkRequiredEnv } = require('./util')

const development = require('./env/development')
const test = require('./env/test')
const production = require('./env/production')


const defaults = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
}

/**
 * Expose
 */

const envVariables = {
  development: Object.assign({}, defaults, development),
  test: Object.assign({}, defaults, test),
  production: Object.assign({}, defaults, production),
}[process.env.NODE_ENV || 'development']

checkRequiredEnv(envVariables)

module.exports = envVariables
