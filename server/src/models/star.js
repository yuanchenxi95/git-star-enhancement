'use strict'
const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const Schema = mongoose.Schema

// const { UserSchemaString } = require('./user')
const StarSchemaString = 'Star'


const StarSchema = new Schema({
  githubRepository: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
    trim: true,
  },
})


StarSchema.index(
  {
    githubRepository: 1,
    username: 1,
  },
  {
    unique: true,
  })


StarSchema.plugin(timestamps)

const StarModel = mongoose.model(StarSchemaString, StarSchema)

module.exports = {
  StarSchemaString,
  StarModel,
}
