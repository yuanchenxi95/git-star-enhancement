const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')


const jwtIssuer = 'https://github-star-enhancement.auth0.com/'
const audience = 'https://github-star-enhancement.ycx95.com'

const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: jwtIssuer + '.well-known/jwks.json',
  }),

  // Validate the audience and the issuer.
  audience: audience,
  issuer: jwtIssuer,
  algorithms: ['RS256'],
})

module.exports = {
  checkJwt,
}

