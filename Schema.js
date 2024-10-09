const mongoose = require('mongoose');

const IcecreamSchema = new mongoose.Schema({
    date:Date,
    sale:Number,
    expense:Number

});

module.exports = mongoose.model('Icecream', IcecreamSchema);