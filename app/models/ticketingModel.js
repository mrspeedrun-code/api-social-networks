const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TicketingSchema = new Schema({
  name: {
    type: String
  }
})

module.exports = TicketingSchema
