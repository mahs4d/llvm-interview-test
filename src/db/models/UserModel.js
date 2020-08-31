const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    senarioId: {
        type: Number,
        required: true,
        default: 1,
    },
});

module.exports = Mongoose.model('User', schema);
