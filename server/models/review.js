const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const reviewSchema = new mongoose.Schema({
    bookId : {type: mongoose.Types.ObjectId, ref: 'Book'},
    stars: {type: Number, required: true, min: [1, "must be one or greater"], max: [5, "must be five or less"]},
    text: {type: String, maxlength: 500},
    dateReviewed: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema)

function validateReview(review){
    const schema = Joi.object({
        bookId: Joi.objectId(),
        stars: Joi.number().min(1).max(5).required(),
        text: Joi.string().max(500),
    })
    return schema.validate(review);
};

module.exports= {
    Review,
    reviewSchema,
    validateReview
}
