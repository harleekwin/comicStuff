"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
    comicName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },
    comicIssue: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) { return value !== '5'; },
            message: '{VALUE} is not a book!'
        }
    },
    comicPublisher: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    currentlyOwns: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose.model('Book', bookSchema);
