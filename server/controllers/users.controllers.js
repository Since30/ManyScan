const User = require('../models/user.model');


module.exports.createUser = (req, res) => {
    
};

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if (users) {
            res.status(200).json({
                message: 'Users retrieved successfully',
                data: users
            });
        } else {
            res.status(404).json({
                message: 'No users found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            error: error
        });
    }
};
module.exports.getUser = async (req, res) => {
    try{
        const user_id = req.params.id;

        const userConnected = await User.findByPk(user_id);
        if(userConnected){
            res.status(200).json({
                message: "User data",
                data: userConnected
            })
        } else{
            res.status(404).json({
            message: "User not found"
    });
        }
    } catch(error){
        res.status(500).json({
            message: "error"
        })
    }
};

module.exports.updateUser = (req, res) => {
    
};

module.exports.delelteUser = (req, res) => {
    
};