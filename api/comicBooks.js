"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var comicBook_1 = require("../models/comicBook");
var router = express.Router();
router.get('/', function (req, res) {
    comicBook_1.default.find().populate('books').then(function (comicbooks) {
        res.json(comicBook_1.default);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
exports.default = router;
