// import mongoose from "mongoose";

const mongoose = require("mongoose");

const supItemsSchema = mongoose.Schema({


    supRegNum : {
        type : String,
        required : true
    },
    supName : {
        type : String,
        required : true
    },
    itemName : {
        type : String,
        required : true
        
    },
    // itemPrice : {
    //     type : String,
    //     required : true
        
    // },
    itemdescription : {
        type: String,
        required : true
    }

});


module.exports = mongoose.model("supitem", supItemsSchema);
// module.exports = supItemModl = mongoose.model("supitem", supItemsSchema);
