const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PhotoBookSchema = new Schema({
  name: {
    type: String
  }
})

module.exports = PhotoBookSchema
