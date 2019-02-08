const _ = require('lodash')

const { StarModel } = require('../models')
const { pickFieldsWithoutUndefinedOrNull } = require('../utils/pickFields')

async function createStar(args) {
  const newArgs = pickFieldsWithoutUndefinedOrNull(args, [
    'username',
    'githubRepository',
    'description',
    'tags',
  ])

  return (new StarModel(newArgs)).save()
}

async function deleteStar(id) {
  return StarModel.findByIdAndDelete(id)
}

async function editStar(args) {
  const { id } = args
  const newArgs = pickFieldsWithoutUndefinedOrNull(args, [
    'username',
    'githubRepository',
    'description',
    'tags',
  ])

  return StarModel.findByIdAndUpdate(id,
    {
      $set: newArgs,
    },
    {
      new: true,
    })
}

async function findStars(args) {
  const newArgs = pickFieldsWithoutUndefinedOrNull(args, [
    'id',
    'username',
    'githubRepository',
    'description',
    'tags',
  ])

  return StarModel.find(newArgs)
}

async function findStarsWithTagOrOperation(username, tags) {
  return StarModel.find({
    username,
    tags: {
      '$in': tags,
    },
  })
}

async function findAllTagsContainName(searchText) {
  if (_.isNil(searchText)) {
    searchText = ''
  }
  // escape the regex
  const escapedSearchText = _.escapeRegExp(searchText)

  const res = await StarModel.aggregate([
    {
      '$unwind' : '$tags',
    },
    {
      '$match': { 'tags': new RegExp(escapedSearchText, 'i')},
    },
    {
      '$group': { _id: '$tags'},
    },
    {
      '$project': {
        tagName: '$_id',
        _id: 0,
      },
    },
  ])
  return res
}


module.exports = {
  createStar,
  editStar,
  deleteStar,
  findStars,
  findStarsWithTagOrOperation,
  findAllTagsContainName,
}
