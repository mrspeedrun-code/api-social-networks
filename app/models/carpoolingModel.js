const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CarpoolingSchema = new Schema({
  active: {
    type: Boolean,
    default: true
  },
  place_of_departure: {
    type: String
  },
  time_of_departure: {
    type: String
  },
  number_of_place: {
    type: Number
  },
  maximum_deviation_time: {
    type: String
  }
})

module.exports = CarpoolingSchema
