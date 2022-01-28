const mongoose = require('mongoose');
const Joi = require('joi');
const reviewSchema = require('./review')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    booksRead: [{type: reviewSchema}]
    
})

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
