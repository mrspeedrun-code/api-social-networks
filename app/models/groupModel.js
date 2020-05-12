const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  nom: {
    type: String
  },
  description: {
    type: String
  },
  icone: {
    type: String,
    default: 'https://picsum.photos/200'
  },
  cover_photo: {
    type: String,
    default: 'https://i.picsum.photos/id/866/600/300.jpg'
  },
  group_type: {
    type: String,
    default: 'public',
    enum: ['public', 'private', 'secret']
  },
  publication_authorization: {
    type: Boolean,
    default: false
  },
  create_event_authorization: {
    type: Boolean,
    default: false
  }
})

module.exports = GroupSchema
