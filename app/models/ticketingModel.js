const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TicketingSchema = new Schema({
  ticket_type: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  last_name: {
    type: String
  },
  first_name: {
    type: String
  },
  adress: {
    type: String
  },
  date_of_purchase: {
    type: Date
  }
})

module.exports = TicketingSchema
