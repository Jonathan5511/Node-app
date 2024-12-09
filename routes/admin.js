const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')

const bodyParsed = require('body-parser')

const products = []

router.use(bodyParsed.urlencoded({extended:true}))

router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{path:'/admin/add-product',pageTitle:'Add Product', formsCSS: true, productCSS: true, aciveAddProducts: true})
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

exports.router = router
exports.products = products