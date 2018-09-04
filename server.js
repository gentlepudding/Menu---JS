const express = require('express');
const menu = require('./data/menu');

const app = express();

app.get('/menu', (req, res) => res.json(menu));
app.use(express.static(__dirname + '/public'));
app.listen('3333');