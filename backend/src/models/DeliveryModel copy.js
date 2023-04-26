const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    
     full_name:{
      type:String,
      required:false
     },
     delivery_address:{
      type:String,
      required:false
     },
     company_name:{
        type:String,
        required:false
     },
     land_mark:{
        type:String,
        required:false
     },
     mobile:{
        type:String,
        required:false
     },
     order_no:{
        type:String,
        required:false
     },
     date:{
      type:String,
      required:false
     },
     status:{
      type:String,
      required:false
     },

    });
    

module.exports = mongoose.model('Delivery',deliverySchema);