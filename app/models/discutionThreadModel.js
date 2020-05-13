const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DiscutionThreadSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  sent: {
    type: Date
  },
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  toGroupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  toEventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }
})

module.exports = DiscutionThreadSchema
