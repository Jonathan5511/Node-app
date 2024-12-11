const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')

const productController = require('../controller/products')

const bodyParsed = require('body-parser')

router.use(bodyParsed.urlencoded({extended:true}))

router.get('/add-product', productController.getAddProduct)

router.post('/add-product', productController.postAddProduct)

module.exports = router