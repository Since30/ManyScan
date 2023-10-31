const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const sequelize = require("./database")
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config({ path: './config/.env' });
require('./database');

app.use(bodyParser.json());
app.use(morgan("dev"));

//----- Headers & autorizations -----//
app.use(cors());

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
  
const authRoutes = require("./routes/authRoute");
const mangaRoutes = require("./routes/mangaRoute");
  
// ... autres configurations et routes
app.use('/api/auth', authRoutes)
app.use("/api/mangas", mangaRoutes);


module.exports = app;