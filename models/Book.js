const { Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
    title: String,
    author: String,
});

module.exports = mongoose.model('Book', BookSchema, "book");