const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (users) {
      res.status(200).json({
        message: "Users retrieved successfully",
        data: users,
      });
    } else {
      res.status(404).json({
        message: "No users found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};
module.exports.getUser = async (req, res) => {
  try {
    const user_id = req.params.id;

    const userConnected = await User.findByPk(user_id);
    if (userConnected) {
      res.status(200).json({
        message: "User data",
        data: userConnected,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.username = username;
    user.email = email;

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
module.exports.editPassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    // Vérifie si l'ancien mot de passe est correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Old incorrect password.",
      });
    }

    // Hachez et met à jour le nouveau mot de passe
    const hashedNewPassword = bcrypt.hashSync(newPassword, 12);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error,
    });
  }
};
module.exports.delelteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await user.destroy();

    res.status(200).json({
      message: "User deleted successfully",
      data: userId,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
