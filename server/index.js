const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();

const PORT = process.env.PORT || 5000;

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});

const Manga = require("./models/manga")(sequelize, Sequelize.DataTypes);

// Synchroniser les modèles avec la base de données
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

// ... autres configurations et routes

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
