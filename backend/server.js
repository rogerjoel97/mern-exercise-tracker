//Librerias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();
//Configuracion del servidor
const app = express();
const port = process.env.port || 5000;
//Middelwares
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://pruebaMern:admin@cluster0.pipsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});



app.listen(port, () => {
    const exercisesRouter = require('./routes/exercises');
    const usersRouter = require('./routes/users');

    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);
    console.log('server is running on port: ${port}');
});