const express = require('express');
const cors = require('cors');

const mangasRoutes = require('./routes/mangas.routes');
const usersRoutes = require('./routes/users.routes');

require('dotenv').config({ path: './config/.env' });
require('./config/db')

const app = express();


// CORS
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares

// Routes
app.use('/api/mangas', mangasRoutes);
app.use('/api/users', usersRoutes);

// Server
let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})