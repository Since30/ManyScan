const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: './config/database.sqlite',
  });

  sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Base de données synchronisée.");
  })
  .catch((err) => {
    console.error(
      "Erreur lors de la synchronisation de la base de données :",
      err
    );
  });