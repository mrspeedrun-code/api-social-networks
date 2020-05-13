const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DiscutionThreadSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  sent: {
    type: Date,
    default: Date.now
  },
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  toChoice: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'choice'
  },
  choice: {
    type: String,
    required: true,
    enum: ['Group', 'Event']
  }
})

module.exports = DiscutionThreadSchema
