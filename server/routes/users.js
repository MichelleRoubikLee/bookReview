const {User,validateUser} = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');



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

        const salt = await bcrypt.genSalt(10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
            isAdmin: req.body.isAdmin
        });
        await user.save();

        const token = user.generateAuthToken();

        return res
            .header('x-auth-token', token)
            .header('access-control-expose-headers','x-auth-token')
            .send({_id:user._id, name:user.name, email:user.email})

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


//get users reviews for refId
// router.get('/:userId/books', async (req, res) => {
//     try {
//         const user = await User.findOne({_id: req.params.userId})
//         .populate('bookReviews')
//         if (!user)
//         return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);
//         return res.send(user);
//     } catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

module.exports = router;