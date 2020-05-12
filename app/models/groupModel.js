const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GroupSchema = new Schema({
  list_of_members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  list_of_admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = GroupSchema
