const mongoose = require('mongoose');

const inquarySchema = new mongoose.Schema({

    service_category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: false
    },

});


module.exports = mongoose.model('Inquary', inquarySchema);