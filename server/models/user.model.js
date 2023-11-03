const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class User extends Model{}
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                arg: true,
                msg: "Username should have a value"
            },
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                arg: true,
                msg: "Email value is not a valid value"
            }
        }
    },
    password:{ 
        type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
          type: DataTypes.ENUM("Admin", "Moderateur", "User"),
          defaultValue: "User"
    } 
  }, {
    sequelize,
    modelName: "User"
});

module.exports = User;
  