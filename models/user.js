const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    booksRead: [{type: mongoose.Types.ObjectId, ref: 'Book'}]
    
})

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required()
        // bookRead: Joi.objectId()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
