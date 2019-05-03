const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(require('./controllers/user.controller'));

mongoose.connect('mongodb://localhost:27017/proyecto', (error, res) => {
    if (error)
        throw error;
    else
        console.log('Base de datos ONLINE');
});
app.listen(8000, () => {
    console.log('Escuchando por el puerto 8000');
});
