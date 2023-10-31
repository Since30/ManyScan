const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const sequelize = require("./database")
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config({ path: './config/.env' });
require('./database');

app.use(bodyParser.json());

//----- Headers & autorizations -----//
app.use(cors());

const authRoutes = require("./routes/authRoute");
const Manga = require("./models/Manga");

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

// const mangaRoutes = require("./routes/manga"); // Assure-toi que le chemin est correct
  
  // ... autres configurations et routes
app.use('/api/auth', authRoutes)

  // app.use("/api/mangas", mangaRoutes);


module.exports = app;