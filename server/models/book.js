const mongoose = require('mongoose');
const Joi = require('joi');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2, maxlength: 50},
    author:{type: String, required: true, minlength: 2, maxlength: 50},
    description:{type: String, required: true, minlength: 2, maxlength: 255},
    dateAdded:{ type: Date, default: Date.now },
    reviewRef: { type: Schema.Types.ObjectId, ref: 'Review'}
    //add posted by refId
})

const Book = mongoose.model('Book', bookSchema);

function validateBook(book){
    const schema = Joi.object({
        title: Joi.string().min(2).max(50).required(),
        author: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(2).max(255).required()
    });
    return schema.validate(book);
}

exports.Book = Book;
exports.validateBook = validateBook;
