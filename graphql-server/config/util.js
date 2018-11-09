const _ = require('lodash')

const requiredEnvList = [
  'gitlabKey',
  'gitlabRepositoryId',
]

export function checkRequiredEnv(envVariables) {
  const unsetEnv = _.filter(requiredEnvList, (envString) => {
    return _.isNil(envVariables[envString])
  })

  if (unsetEnv.length > 0) {
    throw new Error('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']')
  }
}

