const express = require('express');
const app = express();
app.use(require('./controllers/user.controller'));

app.listen(8000, () => {
    console.log('Escuchando por el puerto 8000');
});
