'use strict'

/**
 * Expose
 */

module.exports = {
  secret: process.env.SESSION_SECRET,
  mongodbURI: process.env.MONGODB_URI,
  githubClientId: process.env['GITHUB_CLIENT_ID'],
  githubClientSecret: process.env['GITHUB_CLIENT_SECRET'],
  githubCallbackUrl: process.env['GITHUB_CALLBACK_URL'],
  clientHost: process.env['CLIENT_HOST'],
}
