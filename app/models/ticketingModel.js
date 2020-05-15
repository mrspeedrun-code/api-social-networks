const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TicketingSchema = new Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  ticket_type: [
    {
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
      },
      qte: {
        type: Number
      }
    }
  ]
})

module.exports = TicketingSchema
