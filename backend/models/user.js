const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: { type: String, unique: true },
    password: String,
    role: String
});
userSchema.plugin(mongooseUniqueValidator);
const user = mongoose.model('User', userSchema);
module.exports = user;