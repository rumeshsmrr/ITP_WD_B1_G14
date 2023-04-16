const mongoose = require('mongoose');

const AppoSchema = new mongoose.Schema({
    
     appo_id:{
      type:String,
      required:false
     },
     appo_category:{
      type:String,
      required:false
     },
     apppo_description:{
        type:String,
        required:false
     },
     appo_date:{
        type:String,
        required:false
     },
     appo_time:{
        type:String,
        required:false
     }
     

    });
    

module.exports = mongoose.model('appo',AppoSchema);