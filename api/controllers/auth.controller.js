const User = require('../models/user.model.js')
const errorHandler = require('../utils/error.js')
const bcryptjs = require('bcryptjs')

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    try {
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error);
    }
}


module.exports = { signup }