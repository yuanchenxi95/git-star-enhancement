'use strict'
const jwt = require('jsonwebtoken')

const config = require('../config')

const {
  NoTokenProvided,
  FailToValidateToken,
} = require('../constants/errorCode')

/**
 * private helper method for verifying token
 * @param token
 * @returns {Promise}
 */
async function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        reject(err)
      }

      resolve(decoded)
    })
  })
}


function generateJwtTokenForUser(user) {
  return jwt.sign(user, config.secret, {
    algorithm: 'HS512', // HMAC using SHA-512 hash algorithm
    expiresIn: 60 * 60 * 24 * 7, // expires in a week
  })
}

async function verifyToken(req, res, next) {
  try {
    const token = req.headers['x-access-token']
    if (!token) {
      return res.status(401).json(NoTokenProvided)
    }

    const profile  = await decodeToken(token)

    req.profile = profile
    return next()

  } catch(error) {
    return res.status(401).json(FailToValidateToken)
  }
}

module.exports = {
  generateJwtTokenForUser,
  verifyToken,
  decodeToken,
}
