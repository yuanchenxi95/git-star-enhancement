'use strict'

/**
 * Expose
 */

module.exports = {
  secret: 'AddOneSecond',
  mongodbURI: process.env.MONGODB_URI,
  githubClientId: process.env['GITHUB_CLIENT_ID'],
  githubClientSecret: process.env['GITHUB_CLIENT_SECRET'],
  githubCallbackUrl: 'http://127.0.0.1:3000/auth/github/callback',
}
