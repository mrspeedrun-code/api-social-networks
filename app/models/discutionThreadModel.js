const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DiscutionThreadSchema = new Schema({
  photoBookModel: {
    type: String
  }
})

module.exports = DiscutionThreadSchema
