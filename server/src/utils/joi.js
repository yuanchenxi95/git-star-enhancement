const Joi = require('joi')
const _ = require('lodash')

const { objectIdRegex } = require('./regex')


const {
  InvalidIdFormat,
} = require('../constants/errorCode')

function sendJoiValidationError(error, res) {
  return res.status(400).json(error)
}

function joiValidateGenerator(fieldList, bodySchema) {
  return (req, res, next) => {
    const body = _.pick(req.body, fieldList)
    const joiResult  = Joi.validate(body, bodySchema, {
      abortEarly: false,
    })

    const joiError = joiResult.error

    if (!_.isNil(joiError)) {
      return sendJoiValidationError(joiError, res)
    } else {
      return next()
    }
  }
}

function joiValidateParamIdGenerator(param) {
  return (req, res, next) => {

    const joiResult  = Joi.validate(
      req.params[param],
      Joi.string().regex(objectIdRegex),
      {
        abortEarly: false,
      })

    const joiError = joiResult.error

    if (!_.isNil(joiError)) {
      return res.status(400).json(InvalidIdFormat)
    } else {
      return next()
    }
  }
}

module.exports = {
  sendJoiValidationError,
  joiValidateGenerator,
  joiValidateParamIdGenerator,
}