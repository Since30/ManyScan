const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema(
  {
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
  },

  {
    timestamps: true,
  }
);
// function crypte le password avant le save register
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// Function décrypte le password de l'utilisateur quand login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    return isPasswordMatch;
  }
  return false;
};
// Function décrypte le password et modifie le password quand l'user est logué
userSchema.methods.changePassword = async function (newPassword) {
  this.password = newPassword;

  try {
    await this.save();
    return true;
  } catch (error) {
    console.error("Error changing password:", error);
    return false;
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
