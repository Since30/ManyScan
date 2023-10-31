const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const { v4: uuidv4 } = require('uuid');

class Manga extends Model{}
Manga.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        allowNull: false,
        primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: DataTypes.STRING,
    // ... d'autres champs
  }, {
    sequelize,
    modelName: "table_manag"
});
module.exports = Manga;
