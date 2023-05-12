const mongoose = require("mongoose");

const Purchasing = mongoose.Schema({
 
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    itemName : {
        type : String,
        required : true        
    },
    supName:{
        type:String,
        required:true
    },
    quantity : {
        type : Number,
        required : true,
        default:1
    },
 
},
    { timestamps: true }
);

module.exports = mongoose.model("Purchasing", Purchasing);