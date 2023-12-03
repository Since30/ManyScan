const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
require('./db');

// Informations sensibles
const LOGIN = process.env.LOGIN
const PASSWORD = process.env.PASSWORD
const DB = process.env.DB
const ACCESSMONGO = process.env.ACCESSMONGO

const uri = `mongodb+srv://${LOGIN}:${PASSWORD}${ACCESSMONGO}/${DB}`;

// Methode d'indentification a la base de donnée
mongoose
  .connect(uri)
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log('Failed to connect to mongoDb', err));