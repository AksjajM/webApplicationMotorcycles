const express = require('express');
const app = express();

const allMotorcycles = require('../db.json')

app.get('/motorcycle', function (req, res) {
    res.json(allMotorcycles)
});

app.get('/', function (req, res) {
    res.json({
        number: 1,
    });
});

app.get('/multiple', function (req, res) {
    res.json({
        number: 1,
        name: 'John',
        gender: 'male'
    });
});

app.get('/array', function (req, res) {
    res.json([{
        number: 1,
        name: 'John',
        gender: 'male'
    },
    {
        number: 2,
        name: 'Ashley',
        gender: 'female'
    }]);
});

app.listen(3000, function(req, res){
    console.log("Server is running at port 3000")
});