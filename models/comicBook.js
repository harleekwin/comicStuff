"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var comicBookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});
exports.default = mongoose.model('ComicBook', comicBookSchema);
