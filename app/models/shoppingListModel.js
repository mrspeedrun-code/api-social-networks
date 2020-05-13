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
  special_event_product: {
    type: String
  }
})

module.exports = ShoppingListSchema
