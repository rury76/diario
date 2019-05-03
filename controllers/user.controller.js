const express = require('express');
const app = express();
// Procesa el body por medio de un middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/token', (req, res) => {
    res.status(200).json({ok: true, message: ''});
});

app.post('/api/user/register', (req, res) => {
    let body = req.body;
    res.status(200).json({ok: true, message: body});
});

app.get('/api/user/data', (req, res) => {
   res.status(200).json({ok: true, message: ''});
});

app.put('api/user/edit', (req, res) => {
    res.status(200).json({ok: true, message: ''})
});

module.exports = app;

