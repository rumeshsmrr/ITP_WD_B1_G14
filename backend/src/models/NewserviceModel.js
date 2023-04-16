const mongoose = require('mongoose');

const newServiceSchema = new mongoose.Schema({
    
     new_service_id:{
      type:String,
      required:true
     },
     new_service_category:{
      type:String,
      required:false
     },
     new_service_description:{
        type:String,
        required:false
     },
     new_price_title:{
        type:String,
        required:false
     },
     new_price:{
        type:String,
        required:false
     }
     

    });
    

module.exports = mongoose.model('newService',newServiceSchema);