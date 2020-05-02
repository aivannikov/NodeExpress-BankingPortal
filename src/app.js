const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index', { title: 'Index' });
});
const server = http.createServer( (req, res) => {

});
server.listen(port, "localhost", () => {
    console.log("PS Project Running on port 3000!");
  });
