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

router.post('/edit/:id', async (req,res) =>{
  var id = req.params.id
  console.log(id)
  await Post.updateOne({_id: id}, req.body);
  res.redirect('/')
})
router.get('/edit/:id', async (req,res) =>{
  var id = req.params.id
  console.log(id)
  const editPost = await Post.findById(id);
  res.render('edit.ejs', {editPost})
})

router.post('/delete/:id', async (req,res) =>{
  var id = req.params.id
  await Post.remove({_id: id})
  res.redirect('/')
})

router.get('/delete/:id', async (req,res) =>{
  var id = req.params.id
  console.log(id)
  const delPost = await Post.findById(id);
  res.render('delete.ejs', {delPost})
})

module.exports = router;