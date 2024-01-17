const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});
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
    userAvatar: String,
    comments: [commentSchema],
})

module.exports = mongoose.model('Animal', animalSchema);