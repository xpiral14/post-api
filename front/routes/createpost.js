const router = require('express').Router();
const axios = require('axios')
const url = require('../libs/urls').serverURI + 'posts/'

router.get("/", (req, res) => {
    res.render('createPost')
})
router.post('/', (req, res) => {
    axios.post('http://localhost:3000/posts', {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    }).then(result => {
        console.log('Enviado com sucesso!');
        res.redirect('/')
    })
    .catch(err => {
        res.render('error')
    })
})

module.exports = router