const mongoose = require("mongoose");

const itemPurchasingSchema = mongoose.Schema({

    supId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },products:[
        {
            productId:{
                type : mongoose.Schema.Types.ObjectId,
                required : true,
            },
            itemName : {
                type : String,
                required : true
                
            },
            itemdescription : {
                type: String,
                required : true
            },
            quantity : {
                type : Number,
                required : true
            },
        }
    ],
    
    supRegNum : {
        type : String,
        required : true
    },
    supName : {
        type : String,
        required : true
    },
    
    
    
},
    { timestamps: true }
);

module.exports = mongoose.model("itemPurchase", itemPurchasingSchema);