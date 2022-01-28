const {User,validateUser} = require('../models/user');
const express = require('express');
const router = express.Router();

//get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//get user by id
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user)
        return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);
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

//add a new book to user list
router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push:{booksRead: req.body.newRead}},
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


//get users book reads
router.get('/:userId/books', async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.userId})
        .populate('booksRead')
        if (!user)
        return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;