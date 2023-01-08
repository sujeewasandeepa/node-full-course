const { ObjectId } = require("mongodb");
const Book = require("../models/Book");

exports.index = async (req, res) => {
    const books = await Book.find();
    res.json(books);
}; 
 
exports.store = async (req, res) => {
    try {
        await Book.create(req.body);
        res.json({"data" : "Book is created!"})
    } catch (err) {
        res.json(err);
    }
}

exports.show = async (req, res) => {
    const _id = ObjectId(req.params.id);
    const book = await Book.find({ _id });
    res.json(book);
}

exports.change = async (req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.updateOne({ _id }, {$set: req.body });
    res.json({"data": "Book is updated!"});
}

exports.remove = async (req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.deleteOne({ _id });
    res.status(204);
}