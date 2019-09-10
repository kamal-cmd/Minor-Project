const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phoneno: {
        type: Number
    }
    
},
);
module.exports = mongoose.model('User', user); 