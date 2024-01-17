const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name:{
        type: String,
    },
    picture:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    breed:{
        type: String,
    },
    vet:{
        type: Boolean,
        required: true
    },
    vetWhen:{
        type: Date,
    },
    foster:{
        type: Boolean,
    },
    userName: String,
    userAvatar: String
})

module.exports = mongoose.model('Animal', animalSchema);