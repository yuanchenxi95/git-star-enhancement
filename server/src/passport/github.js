module.exports = function(app) {

  const GitHubStrategy = require('passport-github').Strategy
  const passport = require('passport')
  const config = require('../config/index')

  const { generateJwtTokenForUser, verifyToken } = require('./jwt')

  function generateProfile(accessToken, profile) {
    const { displayName, username, profileUrl, _json } = profile
    const { avatar_url } = _json
    const obj = {
      displayName,
      username,
      profileUrl,
      accessToken,
      avatar_url,
    }
    return obj
  }

  passport.use(new GitHubStrategy({
      clientID: config.githubClientId,
      clientSecret: config.githubClientSecret,
      callbackURL: config.githubCallbackUrl,
    },
    function(accessToken, refreshToken, profile, cb) {
      const obj = generateProfile(accessToken, profile)
      return cb(null, obj)
    }

  ))

  // GitHub authentication
  app.use(passport.initialize())
  // app.use(passport.session())
  //
  passport.serializeUser(function(user, cb) {
    cb(null, user)
  })

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
  })

  app.get('/auth/github', passport.authenticate('github'))

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: config.clientHost }),
    function(req, res) {
      const token = generateJwtTokenForUser(req.user)
      res.redirect(`${config.clientHost}/#/github/callback/${token}`)
    })

  app.get('/auth/github/profile', verifyToken, async (req, res) => {
    return res.json(req.profile)
  })
}