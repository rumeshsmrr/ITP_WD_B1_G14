// import mongoose from "mongoose";
const mongoose = require("mongoose");

const supSchema = mongoose.Schema({

    
    supRegNum : {
        type : String,
        required : true
    },
    supName : {
        type : String,
        required : true
    },
    supContNum : {
        type : Number,
        required : true
        
    },
    supAddr : {
        type : String,
        required : true
        
    },
    supMail : {
        type: String,
        required : true
        
    },
    description : {
        type: String,
        required : true
    }

});

module.exports = mongoose.model("sup", supSchema);
// const supModel = mongoose.model("sup", supSchema);
// export default supModel;


