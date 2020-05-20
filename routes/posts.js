const router = require('express').Router()
const { getPosts, createPost } = require('../controller/posts')

router.get('/', getPosts )

router.post('/', createPost )

module.exports = router
  
