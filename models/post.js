const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  context: {
    type: String,
  },
  date: {
    type: Date,
  },

})

module.exports = mongoose.model('Post', postSchema)