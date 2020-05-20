const BlogCategory = require('../models/blog_category')

const getBlogCategories = (req, res) => {
  const blogCategories = BlogCategory.find()
  .then( blogCategories => {
    res.status(200).json({
      blog_category: blogCategories
    })
  })
}

const createBlogCategory = (req, res) => {
  const blogCategory = new BlogCategory(req.body)
  blogCategory.save()
  .then((result) => {
    res.status(200).json({
      name: result
    })
  })
  
}

module.exports = {
  createBlogCategory,
  getBlogCategories
};