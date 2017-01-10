const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

// Definir a route principal
app.get('/', function (req, res) {
    res.send('IBK Mocks');
});

// Authentication (Login)
app.post('/oauth/token', function (req, res, next) {
    if ((!req.body.username || !req.body.password)) {
        res.sendStatus(400);
    } else {
        let response = {
            "access_token": "dh2931hud1dh91hd921j",
            "expires_in": "string",
            "scope": "string",
            "token_type": "string"
        }
        res.send(response);
    }
})

// Extract Current Account
app.get('/extract/current-account/agency/account', function (req, res, next) {
    let response = {
        "data": {
            "actualBalance": {
                "date": "2017-01-02",
                "value": 0
            },
            "balance": {
                "available": 0,
                "blocked": 0,
                "partial": 0,
                "restricted": 0,
                "securedAccountLimit": 0,
                "totalCharge": 0
            },
            "entries": [{
                    "date": "2017-01-02",
                    "description": "Casas Bahia",
                    "document": "string",
                    "type": "Debit",
                    "value": 100.00
                },
                {
                    "date": "2017-01-02",
                    "description": "Burguer King",
                    "document": "string",
                    "type": "Debit",
                    "value": 40.12
                },
                {
                    "date": "2017-01-02",
                    "description": "Country Wine",
                    "document": "string",
                    "type": "Debit",
                    "value": 924.40
                },
                {
                    "date": "2017-01-01",
                    "description": "Eduardo Pedroso",
                    "document": "string",
                    "type": "Credit",
                    "value": 80.00
                },
                {
                    "date": "2017-01-01",
                    "description": "Saldo",
                    "document": "string",
                    "type": "Balance",
                    "value": 119.00
                },
            ],
            "lastBalance": {
                "date": "2017-01-02",
                "value": 0
            }
        },
        "error": {}
    }
    res.send(response);
})

// Extract Investment
app.get('/extract/investment/agency/account', function (req, res, next) {
    let response = {
        "data": {
            "actualBalance": {
                "date": "2017-01-02",
                "value": 0
            },
            "balance": {
                "available": 0,
                "blocked": 0,
                "partial": 0,
                "restricted": 0,
                "securedAccountLimit": 0,
                "totalCharge": 0
            },
            "entries": [{
                    "date": "2017-01-02",
                    "description": "Casas Bahia Invest",
                    "document": "string",
                    "type": "Debit",
                    "value": 100.00
                },
                {
                    "date": "2017-01-02",
                    "description": "Burguer King Invest",
                    "document": "string",
                    "type": "Debit",
                    "value": 40.12
                },
                {
                    "date": "2017-01-02",
                    "description": "Country Wine Invest",
                    "document": "string",
                    "type": "Debit",
                    "value": 924.40
                },
                {
                    "date": "2017-01-01",
                    "description": "Eduardo Pedroso Invest",
                    "document": "string",
                    "type": "Credit",
                    "value": 80.00
                },
                {
                    "date": "2017-01-01",
                    "description": "Saldo Invest",
                    "document": "string",
                    "type": "Balance",
                    "value": 119.00
                },
            ],
            "lastBalance": {
                "date": "2017-01-02",
                "value": 0
            }
        },
        "error": {}
    }
    res.send(response);
})

// Balance Current Account
app.get('/balance/current-account/agency/account', function (req, res, next) {
    let response = {
        "data": {
            "available": 8000,
            "blocked": 0,
            "partial": 0,
            "restricted": 0,
            "securedAccountLimit": 0,
            "totalCharge": 0
        },
        "error": {}
    }
    res.send(response);
})

// Balance Investment
app.get('/balance/investment/agency/account', function (req, res, next) {
    let response = {
        "data": {
            "presentBalance": {
                "grossTotalBalance": 1000,
                "incomeTax": 20,
                "netTotalBalance": 0,
                "taxFinancialTransactions": 0,
                "totalProfitability": 0
            },
            "futureBalance": {
                "grossTotalBalance": 2000,
                "incomeTax": 12,
                "netTotalBalance": 0,
                "taxFinancialTransactions": 0,
                "totalProfitability": 0
            },
            "products": [{
                "code": "string",
                "description": "string",
                "dueDate": "2017-01-09",
                "index": "string",
                "indexPercentage": 0,
                "product": "string",
                "rate": 0,
                "startDate": "2017-01-09",
                "presentStartValue": 0,
                "presentGrossValue": 0,
                "presentNetValue": 0,
                "presentTaxFinancialTransactionsValue": 0,
                "presentIncomeTaxValue": 0,
                "presenteProfitabilityValue": 0,
                "futureStartValue": 0,
                "futureGrossValue": 0,
                "futureTaxFinancialTransactionsValue": 0,
                "futureNetValue": 0,
                "futureIncomeTaxValue": 0,
                "futureProfitabilityValue": 0
            }]
        },
        "error": {}
    }
    res.send(response);
})

//Internal Transfer
app.post('/transfer/internal-transfer', function (req, res, next) {
    if ((!req.body.date || !req.body.document || !req.body.debit || !req.body.credit || !req.body.value || !req.body.password)) {
        res.sendStatus(400);
    } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    }
})

//TED Thrid Part
app.post('/transfer/ted/third-party', function (req, res, next) {
    if ((!req.body.date || !req.body.debit || !req.body.credit || !req.body.bank || !req.body.beneficiary || !req.body.value || !req.body.password)) {
        res.sendStatus(400);
    } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    }
})

//TED Same ownership
app.post('/transfer/ted/same-ownership', function (req, res, next) {
    if ((!req.body.date || !req.body.debit || !req.body.credit || !req.body.bank || !req.body.beneficiary || !req.body.value || !req.body.password || !req.body.purpose)) {
        res.sendStatus(400);
    } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    }
})

//DOC Same ownership
app.post('/transfer/doc/same-ownership', function (req, res, next) {
    if ((!req.body.date || !req.body.debit || !req.body.credit || !req.body.bank || !req.body.beneficiary || !req.body.value || !req.body.password || !req.body.purpose)) {
        res.sendStatus(400);
    } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    }
})

//DOC Thrid Part
app.post('/transfer/doc/third-party', function (req, res, next) {
    if ((!req.body.date || !req.body.debit || !req.body.credit || !req.body.bank || !req.body.beneficiary || !req.body.value || !req.body.password || !req.body.purpose)) {
        res.sendStatus(400);
    } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    }
})

//Token Client
app.get('/token/client/', function (req, res, next) {
    let response = {
        "data": {
            "status": "string",
            "attributionDate": "2017-01-09",
            "expirationDate": "2017-01-09",
            "serial": "string",
            "type": "C",
            "lockDate": "2017-01-09",
            "activationId": 0,
            "activationPassword": 0
        },
        "error": {}
    }
    res.send(response);
})

//Unblock Client Token
app.post('/token/client/unblock', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Block Client Token
app.post('/token/client/block', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Synchronize Client Token
app.post('/token/client/synchronize', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Change eletronic Password 
app.post('/password/change/electronic', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Change bankline Password 
app.post('/password/change/bankline', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Change unique Password 
app.post('/password/change/unique', function (req, res, next) {
    let response = {};
    res.send(response);
})

//Recover Password 
app.post('/password/recover', function (req, res, next) {
    let response = {
        "data": {
            "password": "faustop"
        },
        "error": {}
    };
    res.send(response);
})

// Aplicação disponível em http://127.0.0.1:3000/
app.listen(process.env.PORT || 3000);
