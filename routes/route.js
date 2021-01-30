const express = require('express')
const router = express.Router();
const Product = require('../Models/products')

router.get('/product', async (req, res, next) => {

    const a = await Product.find()
    res.json(a)
})

router.get('/product/:id', async (req, res, next) => {

    const id = req.params.id
    const a = await Product.findById(id)
    res.json(a)
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


router.put('/product/:id', (req, res) => {

    const id = req.params.id
    const updatedTitle = req.body.updatedTitle

    Product.findById(id).then(product => {
        product.title = updatedTitle
        return product.save();
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    res.status(200,)

})

router.delete('/product/:id', (req, res) => {

    const id = req.params.id

    Product.findByIdAndRemove(id).then(product => {
        console.log(product)
    })
        .catch(err => {
            console.log(err)
        })
    res.status(200,)

})



module.exports = router
