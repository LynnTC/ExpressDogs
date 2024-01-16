const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name:{
        type: String,
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
    }
})

module.exports = mongoose.model('Animal', animalSchema);