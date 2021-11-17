const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){
  var posts = await Post.find()
  console.log(posts)
  res.render('index', {posts});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body)
  console.log(req.body)
  await post.save()
  res.redirect('/')
})

router.post('/edit', async (req,res) =>{

})
router.get('/edit:id', async (req,res) =>{
  
})

router.post('/delete', async (req,res) =>{

})

router.get('/delete', async (req,res) =>{
  
})

module.exports = router;