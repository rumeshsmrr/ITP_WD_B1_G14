const express = require('express')
const {
    createProduct , getProduct , getProducts , deleteProduct , updateProduct
} = require('../controllers/productController')

const Product = require('../models/productModel')
const router = express.Router()

//GET all the products
router.get('/' , getProducts)

//GET a single product
router.get('/:id' , getProduct)

//POST a new product
router.post('/' , createProduct)

//DELETE a product
router.delete('/:id' , deleteProduct)

//UPDATE a product 

router.patch('/:id' , updateProduct)

module.exports = router 