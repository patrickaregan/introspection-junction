const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is required',
            match: [/.+@.+\..+/, 'Please enter a valid email address']
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

const User = model('User', UserSchema);

module.exports = User;
