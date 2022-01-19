const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: String,
    stadium: String,
    country: String,
    foundation: Number,
    img: String
});

const team = mongoose.model('Team', teamSchema);

module.exports = team;