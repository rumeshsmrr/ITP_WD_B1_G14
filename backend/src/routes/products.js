const express = require('express')
const {
    createProduct , getProduct , getProducts , deleteProduct , updateProduct, searchProducts
} = require('../controller/productController')

const Product = require('../models/productModel')
const router = express.Router()

//GET all the products
router.get('/' , getProducts)

//GET a single product
router.get('/:id' , getProduct)
//Search
router.get('/search/:key' , searchProducts)

//POST a new product
router.post('/' , createProduct)

//DELETE a product
router.delete('/:id' , deleteProduct)

//UPDATE a product 

router.patch('/:id' , updateProduct)

module.exports = router 