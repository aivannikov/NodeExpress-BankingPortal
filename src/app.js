const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const { accounts, users,  writeJSON } = require('./data');
const accountRoutes  = require("./routes/accounts.js");
const servicesRoutes  = require("./routes/services.js");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded( {extended: true} ));

app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);
// const accountData = fs.readFileSync("src/json/accounts.json", "utf8");
// const accounts = JSON.parse(accountData);

// const userData = fs.readFileSync("src/json/users.json", "utf8");
// const users = JSON.parse(userData);


app.get('/', function(req, res) {
    res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.get('/profile', function(req, res) {
    res.render('profile', { user: users[0] });
});







app.listen(port,  () => {
    console.log("PS Project Running on port 3000!");
  });
