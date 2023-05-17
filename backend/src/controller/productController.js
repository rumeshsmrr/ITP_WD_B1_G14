const Product = require('../models/productModel')
const mongoose = require('mongoose')

//GET all products 
const getProducts = async (req , res) => { 

    // const products = await Product.find({price : 1499}) this is used to fidn every object with price 1499 useful in filter 
    const products = await Product.find({}).sort({createAt : -1}) //in descending order(newest ones at the top of the webpage)

    res.status(200).json(products) 

    
    

}


//GET a single product 

const getProduct = async(req , res) => {

    let result = await Product.findOne({_id : req.params.id})

    if(result){

        res.send(result)

    }else{

        res.send({"result" : "No record found"})

    }

    // const {id} = req.params 

    // if(!mongoose.Types.ObjectId.isValid(id)){ // to check if the product is available in the database 
    //     return res.status(404).json({error : 'Product not found'})
    // }

    // const product = await Product.findById(id)

    // if(!product){
    //     return res.status(404).json({error : 'No such workout'}) //we dont want to continue that's why we return 

    // }

    // res.status(200).json(product)
}


//CREATE a new product 
// const createProduct = async(req , res) => {

//     //add doc to db
//     const {name , price , category , cover , description , discount} = req.body
    
//     try{
//         const product = await Product.create({name , price , category , cover , description , discount})  
//         res.status(200).json(product)

//     }catch(error){

//         res.status(400).json({error : error.message})

//     }
// }

//DELETE a product 
const deleteProduct = async(req , res) => {
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'Product not found'})
    }

    const product = await Product.findOneAndDelete({_id : id})

    if(!product){
        return res.status(400).json({error : 'No such workout'}) //we dont want to continue that's why we return 

    }

    res.status(200).json(product) 
}

//UPDATE a product 

const updateProduct = async (req , res) =>{


    
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'Product not found'})
    }

    const product = await Product.findOneAndUpdate({_id : id} , {
        ...req.body
    })

    if(!product){
        return res.status(400).json({error : 'Unable to update product since it doesnt exist'}) //we dont want to continue that's why we return 

    }

    res.status(200).json(product)

}

const searchProducts = async(req , res) =>{
    let result = await Product.find({
        "$or": [
            {
                name: {$regex:req.params.key}
            }
        ]
    })
    res.send(result)
}


module.exports = {

    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    searchProducts

}