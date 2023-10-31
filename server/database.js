const { Sequelize } = require("sequelize");
const path = require('path');

// Spécifiez le chemin complet du fichier SQLite
const databasePath = path.join(__dirname, './data/database.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: databasePath,
});

module.exports = sequelize;