const mongoose = require('mongoose');
const Joi = require('joi');

const bookSchema = new mongoose.Schema({
    //title, author, description, genre, dateModified
})

const Book = mongoose.model('Book', bookSchema);

function validateBook(book){
    const schema = Joi.object({

    })
    return schema.validate(book);
}

exports.Book = Book;
exports.validate = validateBook;
exports.productSchema = productSchema;