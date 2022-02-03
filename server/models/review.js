// const mongoose = require('mongoose');
// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi)

// const reviewSchema = new mongoose.Schema({
//     bookId : {type: mongoose.Types.ObjectId, ref: 'Book'},
//     stars: {type: Number, required: true, min: [1, "must be one or greater"], max: [5, "must be five or less"]},
//     dateReviewed: { type: Date, default: Date.now }
// })

// const Review = mongoose.model("Review", reviewSchema)

// function validateReview(review){
//     const schema = Joi.object({
//         bookId: Joi.objectId().required(),
//         stars: Joi.number().min(1).max(5).required()
//     })
// }

// exports.reviewSchema = reviewSchema;
// exports.validateReview = validateReview;