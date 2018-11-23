const _ = require('lodash')

function pickFieldsWithoutUndefinedOrNull(args, fields) {
  const newArgs = _.pick(args, fields)
  return _.pickBy(newArgs, _.identity)
}


module.exports = {
  pickFieldsWithoutUndefinedOrNull,
}
