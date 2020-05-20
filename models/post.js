const mongoose = require('mongoose')
const BlogCategory = require('./blog_category')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  blog_category_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'BlogCategory'
  }
});

module.exports = mongoose.model('Post', postSchema);