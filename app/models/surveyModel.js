const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SurveySchema = new Schema({
  question: {
    type: {
      type: String
    }
  }
})

module.exports = SurveySchema
