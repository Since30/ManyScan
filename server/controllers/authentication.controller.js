const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

require('dotenv').config({ path: '../config/.env' })

// Function de création de compte
module.exports.register = async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        return res.status(201).send({ user: user._id });
    } catch (error) {
        console.error(error)
        return res.status(400).send({ error });
    };
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
