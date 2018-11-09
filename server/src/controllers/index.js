'use strict'
module.exports = function (app) {
  const express = require('express')
  const { asyncErrorWrapper } = require('../utils')
  const { checkJwt } = require('../middlewares/jwt')

  const apiRouter = express.Router()
  app.use('/api', apiRouter)

  apiRouter.get('/hello', asyncErrorWrapper(async function(req, res) {
    res.send('Hello World')
  }))

  apiRouter.get('/protectedHello',
    checkJwt,
    asyncErrorWrapper(async function(req, res) {
      console.log(req.user)
      res.send('Protected Hello')
    }),
  )


}
