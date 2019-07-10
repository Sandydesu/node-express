const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/sample');
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
app.use('/', require('./routes'));
app.listen(3000);