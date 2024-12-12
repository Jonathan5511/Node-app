const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')

const adminController = require('../controller/admin')

const bodyParsed = require('body-parser')

router.use(bodyParsed.urlencoded({extended:true}))

router.get('/add-product', adminController.getAddProduct)

router.get('/products', adminController.getProducts)

router.post('/add-product', adminController.postAddProduct)

module.exports = router