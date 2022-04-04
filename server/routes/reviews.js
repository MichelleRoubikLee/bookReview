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
            userId: req.params.userId,
            stars: req.body.stars,
            text: req.body.text
        })

        await review.save();

        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push:{bookReviews: review._id}},
            { new: true }
        );

        if (!user)
            return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);
        await user.save();

        const book = await Book.findByIdAndUpdate(
            req.params.bookId,
            {$push:{reviewRef: review._id}},
            { new: true }
        )

        if (!book)
            return res.status(400).send(`The book with id "${req.params.bookId}" does not exist.`);
        await book.save();
    //add review id to book's reviews
        
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/reviews', async (req,res) => {
    try{
        const reviews = await Review.find()
        return res.send(reviews)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//get reviews for one book
router.get('/:bookId', async (req,res) => {
    try{
        const book = await Book.findById(req.params.bookId).populate('reviewRef')
        
        return res.send(book);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//get reviews for one user
router.get('/:userId', async (req,res) => {
    try{
        const user = await User.findById(req.params.bookId).populate('reviewRef')
        
        return res.send(user);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//delete book review
// router.delete('/delete/:reviewId', async (req,res) => {
//     try{
//         const review = await Review.findByIdAndDelete(req.params.reviewId);
        
//         const user = await User.findByIdAndUpdate(
//             review.userId,
//             {$pull {}}
//         )
        
//     }catch(ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// })

module.exports = router;