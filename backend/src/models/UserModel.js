const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
     customer_name:{
      type:String,
      required:true
      },
     email:{
      type:String,
      required:false
      },
     nic:{
        type:String,
        required:false
     },
     phone_number:{
        type:String,
        required:false
     },
     password:{
        type:String,
        required:false
     }

    });
    

module.exports = mongoose.model('User',userSchema);