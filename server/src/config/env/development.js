'use strict'

/**
 * Expose
 */

module.exports = {
  secret: 'AddOneSecond',
  mongodbURI: 'mongodb://localhost:27017/github-star-enhancement',
  githubClientId: '8e4b7150b0e12cec1616',
  githubClientSecret: process.env['GITHUB_CLIENT_SECRET'],
  githubCallbackUrl: 'http://127.0.0.1:3000/auth/github/callback',
}
