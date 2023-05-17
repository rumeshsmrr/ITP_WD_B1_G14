const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req , file , callback) => {
        callback(null , "../frontend/public/uploads/")
    },
    filename: (req , file , callback) => {
        callback(null , file.originalname)
    }
})

const upload = multer({storage : storage})

const {
     getProduct , getProducts , deleteProduct , updateProduct, searchProducts
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
router.post('/' ,  upload.single("cover") ,(req , res) => {

    const product = new Product({
        name : req.body.name , 
        description : req.body.description,
        price : req.body.price , 
        category : req.body.category,
        discount : req.body.discount , 
        cover : req.file.originalname
        
    })

    product 
        .save()
        .then(() => res.json("New product is added"))
        .catch((err) => res.status(400).json(`Error : ${err}`))
})

//DELETE a product
router.delete('/:id' , deleteProduct)

//UPDATE a product 

router.patch('/:id' , updateProduct)

module.exports = router 