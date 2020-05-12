const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShoppingListSchema = new Schema({
  name: {
    type: String
  }
})

module.exports = ShoppingListSchema
