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

const updatePost = (req, res) => {
  const post = Post.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
  .then( result => {
    res.status(200).json({
      post: result
    })
  })
  .catch( err => {
    res.status(400).json({
      error: err
    })
  })
}

const deletePost = (req, res) => {
  const post = Post.findByIdAndDelete(req.params.id, req.body)
  .then( result => {
    res.status(200).json({
      post: result
    })
  })
  .catch( err => {
    res.status(400).json({
      error: err
    })
  })
}

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
};