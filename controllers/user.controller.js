const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../models/user.model');
const Encryption = require('../functions/encryption.functions');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/token', (req, res) => {
    res.status(200).json({ok: true, message: ''});
});

app.post('/api/user/register', (req, res) => {
    let body = req.body;
    const seed = Encryption.GenerateSeed();
    let user = new User({
        name: body.name,
        email: body.email,
        password: Encryption.EncryptionPassword(body.password, seed),
        seed: seed
    });
    user.save().then(userDB => {
        res.json(userDB);
    }).catch(error => {
        res.status(400).json(error);
    });
});

app.get('/api/user/data', (req, res) => {
   res.status(200).json({ok: true, message: ''});
});

app.put('api/user/edit', (req, res) => {
    res.status(200).json({ok: true, message: ''})
});

module.exports = app;

