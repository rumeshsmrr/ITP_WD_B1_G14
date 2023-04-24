const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({

    supRegNum : {
        type : String,
        required : true
    },
    supName : {
        type : String,
        required : true
    },
    orderDate : {
        type : Date,
        required: true
    },
    orderReciveDate : {
        type : Date,
        required: true
    },
    purchaseItem :[{
        itemName : {
            type : String,
            required : true
            
        },
        unitPrice :{
            type : Number,
            required : true
        },
        quantity :{
            type : Number,
            required : true
        },
        amount :{
            type : Number,
            required : true
        },
    }],
    allAmount : {
        type : Number,
        required : true
    },
    delayDate : {
        type : Date,
        required: true
    },
    delypresantage : {
        type : String,
        required : true
    },
    finalAmount : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("suplierOrderPurchase", purchaseSchema);