const mongoose = require('mongoose');

const sellingSchema = new mongoose.Schema({
    
     product_name:{
      type:String,
      required:true
     },
     product_type:{
      type:String,
      required:false
     },
     product_condition:{
        type:String,
        required:false
     },
     brand:{
        type:String,
        required:false
     },
     price:{
        type:String,
        required:false
     },
     product_img:{
        type:String,
        required:false
     }
    });
    

module.exports = mongoose.model('Selling',sellingSchema);