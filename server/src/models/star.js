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
  },
  username: {
    type: String,
    required: true,
    trim: true,
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

StarSchema.plugin(timestamps)

const StarModel = mongoose.model(StarSchemaString, StarSchema)

module.exports = {
  StarSchemaString,
  StarModel,
}
