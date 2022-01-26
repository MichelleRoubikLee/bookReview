const {User,validateUser} = require('../models/user');
const {Book} = require('../models/book');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
        return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//create new user
router.post('/', async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error)
            return res.status(400).send(error);
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });
        await user.save();
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//add a new review
router.put('/:userId/newRead', async (req, res) => {
    try {
        
        Book.findOne({_id: req.body.bookRead})
        .populate('bookRead')
///continue here****************
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                bookRead: req.body.bookRead,
                dateAdded: req.body.date
            },
            { new: true }
        );
        if (!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
        await user.save();
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;