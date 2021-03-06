const router = require('express').Router()
const { getPosts, createPost, updatePost, deletePost } = require('../controller/posts')

router.get('/', getPosts )

router.post('/', createPost )

router.patch('/:id', updatePost )

router.delete('/:id', deletePost )

module.exports = router
  
