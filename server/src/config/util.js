const _ = require('lodash')

const requiredEnvList = [
  'secret',
  'mongodbURI',
  'port',
]

function checkRequiredEnv(envVariables) {
  const unsetEnv = _.filter(requiredEnvList, (envString) => {
    return _.isNil(envVariables[envString])
  })

  if (unsetEnv.length > 0) {
    throw new Error('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']')
  }
}

module.exports = {
  checkRequiredEnv,
}
