const {User} = require('../models/user');
const {Review, validateReview} = require('../models/review');
const express = require('express');
const { Book } = require('../models/book');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

//add a new review to user 
router.put('/:userId/:bookId', auth, async (req, res) => {
    try {
        const {error} = validateReview(req.body);
        if (error)
            return res.status(400).send(error);
        
        const review = new Review({
            bookId: req.params.bookId,
            stars: req.body.stars,
            text: req.body.text
        })

        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push:{bookReviews: review}},
            { new: true }
        );
    //add review id to book's reviews
        if (!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
        await user.save();
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;