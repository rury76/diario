require('./environment/config.environment');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(require('./controllers/user.controller'));

mongoose.connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/proyecto`,
    {useNewUrlParser: true},
    (error, res) => {
    if (error)
        throw error;
    else
        console.log('Mongo ONLINE');
});
app.listen(process.env.PORT, () => {
    console.log(`listen port ${process.env.PORT}`);
});
