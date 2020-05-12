const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  location: {
    type: String
  },
  cover_photograph: {
    type: String
  },
  event_mode: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },
  list_of_organizers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Event must have an organizers']
  }],
  list_of_members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Event must have few or many members']
  }]
})

module.exports = EventSchema
