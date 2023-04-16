const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    
     service_id:{
      type:String,
      required:true
     },
     service_category:{
      type:String,
      required:false
     },
     service_description:{
        type:String,
        required:false
     },
     price_title:{
        type:String,
        required:false
     },
     price:{
        type:String,
        required:false
     }
     

    });
    

module.exports = mongoose.model('Service',serviceSchema);