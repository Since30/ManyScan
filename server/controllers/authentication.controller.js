const User = require('../models/user.model.js');
const JWT = require('jsonwebtoken');

const generateRefreshToken = require('../utils/refresh-token.js'); 
const generateResetToken = require('../utils/forgot-password-token.js');
const sendEmailReinitPassword  = require('./notification.controller.js');

require('dotenv').config({ path: '../config/.env' });


// Function de création de compte
module.exports.register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use"
            });
        }

        const newUser = new User({
            username,
            email,
            password 
        });
        
        await newUser.save();

        return res.status(201).json({
            message: "User successfully created",
            user: newUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message 
        });
    }
};
// Function signin
module.exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordMatch = await User.login(email, password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const expiresIn = parseInt(process.env.TOKEN_EXPIRATION);
        const token = JWT.sign(
            {
                userId: user.id,
                email: user.email,
            },
            process.env.SECRET_TOKEN_KEY,
            { expiresIn }
        );

        // Génère Refresh Token
        const refresh_token = generateRefreshToken(user.id);

        return res
            .status(200)
            .json({ message: 'User authenticated successfully', token });
    } catch (error) {
        console.error('Signin error:', error);
        return res.status(500).json({ message: 'Authentication failed' });
    }
};
// Function logout
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


// Function password reset
module.exports.forgotPassword = async (req, res) => {
    try{
        const email = req.body.email;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = generateResetToken();

        // Enregistre le token de réinitialisation dans le modèle d'utilisateur
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // Expire dans une heure 

        await user.save();

        // Envoyez l'email de réinitialisation
        await sendEmailReinitPassword(email, resetToken);

        return res.status(200).json({ message: 'Password reset successful' });

    } catch(error){
        console.error('Password reset:', error);
        return res.status(500).json({ message: 'Password reset failed' });
    }
};