const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: String,
  description: String,
  start_date: String,
  end_date: String,
  location: Number,
  cover_photograph: String,
  event_mode: String,
  list_of_organisers: String
})

module.exports = Schema
