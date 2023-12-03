const express = require("express");
const cors = require("cors");
const path = require('path');
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require('dotenv').config({ path: './config/.env' });
require('./config/db');


const mangasRoutes = require("./routes/mangas.routes");
const usersRoutes = require("./routes/users.routes");
const authRouter = require("./routes/authentication.router");


const app = express();

// configuration express-mongo-sanitze
app.use(
  mongoSanitize({
      allowDots: true,
      replaceWith: "_",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function main() {}

main();
//----- Headers & autorizations -----//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares

// Routes
app.use("/api/mangas", mangasRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRouter);

module.exports = app;
