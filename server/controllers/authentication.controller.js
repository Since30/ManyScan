const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try{
        const existingUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use"
            });
        }
            const newUser = await User.create({
               username: req.body.username, 
               email: req.body.email, 
               password: bcrypt.hashSync(req.body.password, 12)  
            })
            res.status(200).json({
                message: "User successfully created",
                user: newUser
            })
        
    } catch(error){
        res.status(500).json({
            message: "Server error",
            error: error
        })
    }
};
module.exports.signin = async (req, res) => {
    try{
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
                    email: user.email 
                }, 
                process.env.SECRET_TOKEN_KEY, 
                { expiresIn }
            );

        return res.status(200).json({ message: 'User authenticated successfully', token });
    } catch (error) {
        console.error('Signin error:', error);
        return res.status(500).json({ message: 'Authentication failed' });
    }
}
module.exports.logout = async (req, res) => {
    try {
        const token = req.headers.authorization; 
    
            return res.status(200).json({ 
                message: 'User logged out successfully' ,
                token: token
            });

    } catch (error) {
        console.error('Logout error:', );
        return res.status(500).json({ 
            message: 'Logout failed',
            error: error
        });
    }
};


