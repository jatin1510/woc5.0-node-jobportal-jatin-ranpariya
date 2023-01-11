const express = require('express')
const path = require('path')
const { title } = require('process')
const router = express.Router()
const blogs = require("../data/blogs")

router.get('/', (req, res) =>
{
    // res.sendFile(path.join(__dirname, "../template/index.html"))
    res.render('home');
})

router.get('/blog', (req, res) =>
{
    // res.sendFile(path.join(__dirname, "../template/bloghome.html"))
    res.render('bloghome', {
        blogs: blogs,
    });
})

router.get('/blogpost/:slug', (req, res) =>
{
    myBlog = blogs.filter((e) =>
    {
        return e.slug == req.params.slug;
    })
    res.render('blogpage', {
        title: myBlog[0].title,
        content: myBlog[0].content,
    });
    // res.sendFile(path.join(__dirname, "../template/blogpage.html"))
})

module.exports = router;