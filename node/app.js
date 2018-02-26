var express = require('express');
var app = express();

var db_string = 'mongodb://127.0.0.1/users';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

var User;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));
db.once('open', function(){
	var userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	User = mongoose.model('User', userSchema);

});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/', function(req, res){
	//res.send('Server OK');
	res.end('Servidor OK');
});

app.get('/users', function(req, res){

	User.find({}, function(error, users){
		if(error){
			res.json({error: 'Não foi possivel retornar os usuarios'})
		} else {
			res.json(users);
		}
	});

});

app.get('/users/:id', function(req, res){

	var id = req.param('id');
	
	User.findById(id, function(error, user){
		if(error){
			res.json({error: 'Não foi possivel retornar o usuario'})
		} else {
			res.json(user);
		}
	});

});

app.post('/users', function(req, res){

	var fullname = req.param('fullname');
	var email = req.param('email');
	var password = req.param('password');

	new User({
		'fullname': fullname,
		'email': email,
		'password': password,
		'created_at': new Date()
	}).save(function(error, user){
		if(error){
			res.json({error: 'Não foi possivel salvar o usuario'});
		} else {
			res.json(user);
		}
	});

});

app.put('/users', function(req, res){

	var id = req.param('id');
	var fullname = req.param('fullname');
	var email = req.param('email');
	var password = req.param('password');

	User.findById(id, function(error, user){

		if(fullname){
			user.fullname = fullname;
		}

		if(email){
			user.email = email;
		}

		if(password){
			user.password = password;
		}

		user.save(function(error, user){
			if(error){
				res.json({error: 'Não foi possivel alterar o usuario'});
			} else {
				res.json(user);
			}
		});
	});

});

Message.remove({}, function(err) { 
   console.log('collection removed') 
});

app.listen(3001);