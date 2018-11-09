const _ = require('lodash')
const {
  InternalServerError,
} = require('../constants/errorCode')

module.exports = function (app) {
  // const logger = require('../loggers')

  const logErrors = function (err) {
    // logger.log({
    //   level: 'error',
    //   message: err.stack,
    // })
    console.error(err)
    // logger.log('error', err.stack)
  }

  const errorHandler = function (err, req, res, next) {
    if (!_.isNil(err.name) && err.name === 'UnauthorizedError') {
      console.log(req.headers)
      res.status(err.status).json(err)
    } else {
      logErrors(err)
      res.status(500).json(InternalServerError)
    }
    next()

  }

  app.use(errorHandler)
}
