const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Manga extends Model{}
User.init({
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
    }
  }, {
      sequelize,
      modelName: "Manga"
});

module.exports = Manga;
  