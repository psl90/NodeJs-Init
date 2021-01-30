const express = require('express')
const router = express.Router();

/**
 * Import Model
 */

const Model = require('../Models/products')

/**
 * DEFINE PATH HERE!
 */

const path = '/product'


/**
 * GET ALL
 */

router.get(path, async (req, res, next) => {

    const a = await Model.find()
    res.json(a)
})

/**
 * GET BY ID
 */

router.get(path + '/:id', async (req, res, next) => {

    const id = req.params.id
    const a = await Model.findById(id)
    res.json(a)
})

/**
 * POST
 */

router.post(path, (req, res, next) => {

    /**
     * Add the request body
     *  const STRING = req.body.KEY
     */

    const title = req.body.title;

    /**
     * Add the Schema here
     */

    const model = new Model({
        title: title
    })

    /**
     * Save -> Response Json / Catch potential Errors
     */

    model.save()
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
})

/**
 * UPDATE BY ID
 */

router.put(path + '/:id', (req, res) => {


    const id = req.params.id

    /**
     * Add Update Body
     */
    const title = req.body.title


    Model.findById(id).then(model => {

        /**
         * Update Schema
         */

        model.title = title


        return model.save();
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    res.status(200,)

})

/**
 * DELETE BY ID
 */

router.delete(path + '/:id', (req, res) => {

    const id = req.params.id

    Model.findByIdAndRemove(id).then(model => {
        console.log(model)
    })
        .catch(err => {
            console.log(err)
        })
    res.status(200,)

})

module.exports = router
