"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
    comicName: {
        type: String,
        required: true
    },
    comicIssue: {
        type: Number,
        required: true,
        min: new Number(1)
    },
    comicPublisher: {
        type: String,
        required: true,
    },
    alreadyOwn: {
        enum: ['Y', 'N'],
        type: String,
        required: true
    }
});
exports.default = mongoose.model('Book', bookSchema);
