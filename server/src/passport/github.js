module.exports = function(app) {

  const GitHubStrategy = require('passport-github').Strategy
  const passport = require('passport')
  const config = require('../config/index')

  const { generateJwtTokenForUser, verifyToken } = require('./jwt')

  passport.use(new GitHubStrategy({
      clientID: config.githubClientId,
      clientSecret: config.githubClientSecret,
      callbackURL: config.githubCallbackUrl,
    },
    function(accessToken, refreshToken, profile, cb) {
      const obj = Object.assign({ accessToken }, profile)
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
    passport.authenticate('github', { failureRedirect: '/auth/github' }),
    function(req, res) {
      const token = generateJwtTokenForUser(req.user)
      res.json({
        token,
      })
    })

  app.get('/auth/github/profile', verifyToken, async (req, res) => {
    return res.json(req.profile)
  })
}