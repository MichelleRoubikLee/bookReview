const {Book,validateBook} = require('../models/book');
const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        return res.send(books);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book)
        return res.status(400).send(`The book with id "${req.params.bookId}" does not exist.`);
        return res.send(book);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//create new book
router.post('/', [auth,admin],async (req, res) => {
    try {
        const { error } = validateBook(req.body);
        if (error)
            return res.status(400).send(error);
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,

        });
        await book.save();
        return res.send(book);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;