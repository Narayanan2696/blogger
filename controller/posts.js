const Post = require('../models/post')

const getPosts = (req, res) => {
  const posts = Post.find()
  .then( result => {
    res.status(200).json({
      posts: result
    })
  }) 
}

const createPost = (req, res) => {
  const post = new Post(req.body)
  post.save()
  .then( result => {
    res.status(200).json({
      post: result
    })
  })
}

module.exports = {
  getPosts,
  createPost
};