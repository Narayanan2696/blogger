const mongoose = require('mongoose')

const blogCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('BlogCategory', blogCategorySchema);