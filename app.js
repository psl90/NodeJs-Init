require('dotenv').config()
const express = require('express');
const app = express()
app.use(express.json());
const mongoose = require('mongoose')
const Product = require('./routes/route')

/**
 * UPLOAD FOLDER
 * /*app.use('/admin/uploads', express.static('uploads'));
 */

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', Product)

app.use('/', (req, res) => {

    res.send('Hello World!')

});


mongoose.connect(process.env.MONGO_URL,  { useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
