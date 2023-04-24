const mongoose = require('mongoose') //add more types later on 

const Schema = mongoose.Schema

const productSchema = new Schema({

    name: {
        type : String,
        required : true 
    },

    description: {
        type: String,
        required : true 
    },

    price : {
        type : Number,
        required : true 

    },

    category : {

        type : String , 
        required : true 

    },

    discount: {
        type: Number,
        default: 0,
    },

    cover: {
        type: String,
        required : true 
        
    },

} , {timestamps : true})

module.exports = mongoose.model('Product' , productSchema)

