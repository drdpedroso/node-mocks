var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('PUCC Ionic Course');
});


// Definir um endpoint da API
app.post('/oauth/token', function(req, res, next) {
  res.send('teste');
})

// Aplicação disponível em http://127.0.0.1:3000/
app.listen(process.env.PORT || 3000);
