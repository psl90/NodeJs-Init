const express = require('express')
const router = express.Router();
const Product = require('../Models/products')

router.get('/', (req, res, next) => {

})


router.post('/product', (req, res, next) => {

    const title = req.body.title;

    const product = new Product({
        title: title
    })
    product.save()
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = router
