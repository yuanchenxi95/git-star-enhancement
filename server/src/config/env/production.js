'use strict'

/**
 * Expose
 */

module.exports = {
  secret: process.env.SESSION_SECRET,
  mongodbURI: process.env.MONGODB_URI,
}
