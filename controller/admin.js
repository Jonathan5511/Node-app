const Product = require('../models/product')
const path = require('../util/path')

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/edit-product',{path:'/admin/add-product',pageTitle:'Add Product',editing:false})
}

exports.postAddProduct = (req,res,next)=>{
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(null,title,imageUrl,price,description)
    product.save()
    res.redirect('/')
}

exports.postEditProduct = (req,res,next)=>{
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedImageUrl = req.body.imageUrl
    const updatedDesc = req.body.description
    const updatedPrice = req.body.price
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDesc, updatedPrice)
    updatedProduct.save()
    res.redirect('/admin/products')
}

exports.getEditProduct = (req,res,next)=>{
    const editMode = req.query.edit
    if(!editMode){
        return res.redirect('/')
    }
    const prodId = req.params.productId
    Product.findById(prodId, product=>{
        if(!product){
            return res.redirect('/')
        }
        res.render('admin/edit-product',{path:'/admin/edit-product', pageTitle:'Edit Product', editing:editMode, product:product})
    })
}

exports.postDeleteProduct = (req,res,next)=>{
    const prodId = req.body.productId
    Product.deleteById(prodId)
    res.redirect('/admin/products')
}

exports.getProducts = (req,res,next)=>{
    Product.fetchAll((products)=>{
        res.render('admin/products', {prods:products, pageTitle:'Admin Products', path:'/admin/products'})
    }) 
}

