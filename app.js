const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')

// routes
const postRoutes = require('./routes/posts')
const blogCategoryRoutes = require('./routes/blog_categories')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection is established"))
.catch( err => console.log(err))
const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log("connection is open"))

app.use(express.json())
app.use(morgan("dev"))
app.use('/blog_category', blogCategoryRoutes)
app.use('/posts', postRoutes)

app.listen(process.env.PORT, () => console.log(`server is listening on PORT: ${process.env.PORT}`))
