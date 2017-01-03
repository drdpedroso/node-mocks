const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('IBK Mocks');
});

// Authentication (Login)
app.post('/oauth/token', function(req, res, next) {
	let response = {
		"access_token": "dh2931hud1dh91hd921j",
		"expires_in": "string",
		"scope": "string",
		"token_type": "string"
  }
  res.send(response);
})

// Extract
app.get('/extract/current-account/agency/account', function(req, res, next) {
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
        "entries": [
          {
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

// Aplicação disponível em http://127.0.0.1:3000/
app.listen(process.env.PORT || 3000);
