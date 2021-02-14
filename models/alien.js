const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    name : {
        type: String,
       required: true,
       default:"Agnik"
    },
    tech : {
        type : String,
        required : true,
        default:"NodeJS"
    },
    sub : {
        type: Boolean,
        required: true,
        default : false
    }
})

module.exports = mongoose.model('Alien', alienSchema)