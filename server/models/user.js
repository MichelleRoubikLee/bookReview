const mongoose = require('mongoose');
const Joi = require('joi');
const {reviewSchema} = require('./review');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5,maxlength: 255},
    email: {type: String, required: true, unique: true},
    password: {type:String, required:true,maxlength: 1024, minlength: 5},
    bookReviews: [{type: reviewSchema, ref: 'Review'}]
    
});

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required().min(5).max(50),
        email: Joi.string().required().min(5).max(50).email(),
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
