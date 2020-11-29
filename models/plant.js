const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
    },
    harvest: {
        type: Date,
    },
    sun: {
        type: String,
    },
    notes: {
        type: String,
    },
}, { timestamps: true });


module.exports = mongoose.model('Plant', plantSchema);