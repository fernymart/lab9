const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){
  res.render('index');
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body)
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;