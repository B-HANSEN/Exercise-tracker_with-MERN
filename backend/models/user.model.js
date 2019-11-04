const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
// only has one single field:
    username: {
// validation to the user field:
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    }, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;