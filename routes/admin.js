const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')

const bodyParsed = require('body-parser')

const products = []

router.use(bodyParsed.urlencoded({extended:true}))

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

exports.router = router
exports.products = products