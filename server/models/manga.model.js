const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Manga extends Model{}

Manga.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
    },
    isFavorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
  }, {
      sequelize,
      modelName: "Manga"
});

module.exports = Manga;
  