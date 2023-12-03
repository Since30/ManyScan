const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Veuillez saisir un pseudo'],
            minlength: 3,
            maxlength: 55,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Veuillez saisir un email'],
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Veuillez saisir un mot de passe'],
            max: 50,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ['User', 'Admin', 'Administrateur'], // Les rôles valides
            default: 'User' // Rôle par défaut
          },
    },

    {
        timestamps: true,
    }
)
// function crypte le password avant le save
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt(); 
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Function décrypte le password selon l'utilisateur quand login
userSchema.statics.login = async function(email, password) { 
    const user = await this.findOne({ email });
    
    if (user) {
        const auth = await bcrypt.compare(password, user.password); 
        if (auth) {
            console.log('user as', user)
            console.log('user password as', user.password)
            return user;
        }
        throw Error('Password incorrect') 
    }
    throw Error('email incorrect')
};


const User = mongoose.model('user', userSchema)

module.exports = User;
