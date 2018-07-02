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
    const response = {
    }
    res.send(response);
});

app.get('/people', function (req, res) {
    const response = {
        data: ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
          'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
          'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
          'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
          'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
          'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin',
          'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings Josh',
          'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
        ]
    }
    res.send(response);
});

app.get('/inventors', function (req, res) {
    const response = {
        data: [
          {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
          {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
          {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
          {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
          {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
          {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
          {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
          {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
          {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
          {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
          {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
          {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
        ]
    }
    res.send(response);
});

app.get('/cars', function (req, res) {
    const response = {
        data: ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']
    }
    res.send(response);
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
                {
                    "date": "2016-12-01",
                    "description": "Los Polos Hermanos",
                    "document": "string",
                    "type": "Credit",
                    "value": 80.00
                },
                {
                    "date": "2016-12-01",
                    "description": "Baile funk",
                    "document": "string",
                    "type": "Debit",
                    "value": 100.00
                }
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
                {
                    "date": "2016-12-01",
                    "description": "Los Polos Hermanos",
                    "document": "string",
                    "type": "Credit",
                    "value": 80.00
                },
                {
                    "date": "2016-12-01",
                    "description": "Baile funk",
                    "document": "string",
                    "type": "Debit",
                    "value": 100.00
                }
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
    // if ((!req.body.date || !req.body.document || !req.body.debit || !req.body.credit || !req.body.value || !req.body.password)) {
    //     res.sendStatus(400);
    // } else {
        let response = {
            "data": {
                "identifier": 0
            },
            "error": {}
        }
        res.send(response);
    // }
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

//Payment
app.post('/payment', function (req, res, next) {
    let response = {
        "data": {
            "identifier": 0
        },
        "error": {}
    };
    res.send(response);
})

app.post('/decode', function (req, res, next) {
    let response = {
        "data": {
            "paymentDate": "2017-01-13",
            "dueDate": "2017-01-13",
            "value": 500,
            "barcode": "da456dsa645dsa6d65sa456d4a5",
            "beneficiary": {
                "name": "Eduardo Skywalker",
                "document": "44926584402",
                "personType": "PF"
            },
            "drawee": {
                "agency": 1010,
                "account": 54866,
                "type": 0
            },
            "history": "string"
        }
    }
    res.send(response);
})


// Aplicação disponível em http://127.0.0.1:3000/
app.listen(process.env.PORT || 3000);
