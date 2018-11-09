const _ = require('lodash')
const db = require('../models/index')

function convertStringsToTags(strings) {
  return _.map(strings, (s) => {
    return {
      tagName: s,
    }
  })
}

async function findAllOrCreateIfNotExisted(strings, transaction) {
  const tags = convertStringsToTags(strings)
  const findOrCreateFunctions = _.map(tags, (tag) => {
    return db.Tag.findOrCreate({
      where: tag,
      defaults: {}, transaction,
    })
  })
  const results = await Promise.all(findOrCreateFunctions)
  const savedTags = _.map(results, (r) => {
    return r[0]
  })

  return savedTags

}

module.exports = {
  convertStringsToTags,
  findAllOrCreateIfNotExisted,
}
