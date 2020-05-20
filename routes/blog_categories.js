const router = require('express').Router()
const { createBlogCategory, getBlogCategories } = require('../controller/blog_categories')

router.get('/', getBlogCategories )
router.post('/', createBlogCategory )

module.exports = router
  