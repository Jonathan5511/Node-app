const express = require('express')

const path = require('path')

const router = express.Router()

const shopController = require('../controller/shop')

router.get('/', shopController.getIndex)

router.get('/cart', shopController.getCart)

router.get('/checkout', shopController.getCheckout)

router.get('/orders',shopController.getOrders)

router.get('/products', shopController.getProducts)

module.exports = router