const express = require('express');
const router = express.Router();
const { accounts, writeJSON } = require("../data");

router.get('/payment', function(req, res) {
    res.render('payment', { account: accounts.credit });
});

router.post('/payment', function(req, res) {
    accounts.credit.balance -= parseInt(req.body.amount);
    accounts.credit.available += parseInt(req.body.amount);
    writeJSON();
    res.render('payment', { message: "Payment Successful", account: accounts.credit });
});

router.get('/transfer', function(req, res) {
    res.render('transfer');
});

router.post('/transfer', function(req, res) {
    
    switch(req.body.from)
    {
        case "checking":
            accounts.checking.balance -= parseInt(req.body.amount);
            break;

        case "savings":
            accounts.savings.balance -= parseInt(req.body.amount);
            break;    
    }

    switch(req.body.to)
    {
        case "checking":
            accounts.checking.balance += parseInt(req.body.amount);
            break;

        case "savings":
            accounts.savings.balance += parseInt(req.body.amount);
            break;
    }
    writeJSON();
    res.render('transfer', { message: "Transfer Completed" }); 
});

module.exports  = router;