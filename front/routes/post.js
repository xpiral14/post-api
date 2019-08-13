const router = require('express').Router();
const axios = require('axios')
const url = require('../libs/urls').serverURI + 'posts/'

router.get('/:id', (req, res) => {
    let id = req.params.id

    axios.get((url + id))
        .then(async result => {
            let post = await {
                ...result.data
            }
            res.render('post', {
                post: post[0]
            })
        })
        .catch(err => {
            let message = err.message
            res.render('post', {
                post: message
            })
        })
})

module.exports = router