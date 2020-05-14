const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShoppingListSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  arrival_time: {
    type: String
  },
  special_event_product: [{
    type: String,
    unique: true
  }],
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  active: {
    type: Boolean,
    default: true
  }
})

module.exports = ShoppingListSchema
