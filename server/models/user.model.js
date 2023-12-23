const mongoose = require("mongoose");
const RefreshToken = require('../models/refreshToken.model');
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const generateRefreshToken = require("../config/jwt.refresh-token");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Veuillez saisir un pseudo"],
    minlength: 3,
    maxlength: 55,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Veuillez saisir un email"],
    validate: [isEmail],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Veuillez saisir un mot de passe"],
    max: 50,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Administrateur"], // Les rôles valides
    default: "User", // Rôle par défaut
  },
  refreshTokens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RefreshToken",
      collection: "refreshTokens"
    },
  ],
  resetToken: {
    type: String,
    default: null,
  },
  resetTokenExpiration: {
    type: Date,
    default: null,
  },
});
// function crypte le password avant le save register
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
// Function décrypte le password de l'utilisateur quand login

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    return false;
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return false;
  }

  // Génération du refresh token
  const refreshToken = generateRefreshToken();

  // Création d'un nouveau document RefreshToken
  const newRefreshToken = new RefreshToken({
    token: refreshToken,
    user: user._id, // Référence à l'user actuel
  });

  // Sauvegarde du refresh token
  await newRefreshToken.save();

  // Ajout du nouvel ID de refresh token à l'user
  user.refreshTokens.push(newRefreshToken._id);
  await user.save();

  return true;
};
// Function décrypte le password et modifie le password quand l'user est logué
userSchema.methods.changePassword = async function (newPassword) {
  this.password = newPassword;

  try {
    this.refreshTokens = [];
    await this.save();
    return true;
  } catch (error) {
    console.error("Error changing password:", error);
    return false;
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;