const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

require('dotenv').config({ path: '../config/.env' })

// Function de création de compte
module.exports.register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create and save User
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User successfully created",
            user: newUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message // Send the error message for debugging
        });
    }
};
module.exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const expiresIn = parseInt(process.env.TOKEN_EXPIRATION, 10);
        const token = JWT.sign(
            {
                userId: user.id,
                email: user.email,
            },
            process.env.SECRET_TOKEN_KEY,
            { expiresIn }
        );

        return res
            .status(200)
            .json({ message: 'User authenticated successfully', token });
    } catch (error) {
        console.error('Signin error:', error);
        return res.status(500).json({ message: 'Authentication failed' });
    }
};
module.exports.logout = async (req, res) => {
    try {
        const token = req.headers.authorization;

        return res.status(200).json({
            message: 'User logged out successfully',
            token: token,
        });
    } catch (error) {
        console.error('Logout error:');
        return res.status(500).json({
            message: 'Logout failed',
            error: error,
        });
    }
};
