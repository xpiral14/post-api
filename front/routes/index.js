var express = require('express');
const axios = require('axios');
const url = require('../libs/urls').serverURI + 'posts'
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {

  let posts;
  axios.get(url).then(async result => {
    posts = await result.data
    res.render('index', {
      title: 'Express',
      posts: posts.reverse(),
      phrase: '<h1> hello world </h1>'
    });

  }).catch(err => {
    posts = err.message
    res.render('index', {
      title: 'Express',
      posts: posts,
    });
  })


});

module.exports = router;