const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', { title: 'Index' });
});

app.listen(port,  () => {
    console.log("PS Project Running on port 3000!");
  });
