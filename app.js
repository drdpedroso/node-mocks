var express = require('express');
var app = express();
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('PUCC Ionic Course');
});

// Lista de Utilizadores
var users = [
	   {'photo' : 'http://img.cinemablend.com/cb/9/0/5/a/e/f/905aefab4e52d7786bbad8b94d3c14af4656b5129e0d88cbb21fa04bc7615691.jpg'
	 	, 'name' : 'Darth Vader', 'age': '42','descricao': 'Adoro longas caminhadas na praia. Sith > all. Escorpiano :)'}
	 , {'photo' : 'https://s-media-cache-ak0.pinimg.com/564x/2f/b7/dc/2fb7dc3e5cb7b12b454aa1bfdf45573f.jpg'
     	, 'name' : 'Luke Skywalker', 'age' : '19', 'descricao': 'Primeiramente fora Vader. Segundamente Bom dia'}
     , {'photo' : 'http://www.chewbacca.com/resources/chewie4.jpg'
     	, 'name' : 'Chewbacca', 'age' : '200', 'descricao': 'Muito prazer, Chewie. Um alienígena da raça Wookiee, oriundo do planeta Kashyyyk, cheio de amor para dar.'}
];



// Definir um endpoint da API
app.get('/api/get_persons', function(req, res, next) {
  res.send(users);
})

// Aplicação disponível em http://127.0.0.1:3000/
app.listen(process.env.PORT || 3000);
