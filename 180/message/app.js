var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var db_string = 'mongodb://127.0.0.1/messages';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;
var Message;
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));
db.once('open', function(){
	var messageSchema = mongoose.Schema({
		name: String,
		message: String,
		created_at: Date
	});

	Message = mongoose.model('Message', messageSchema);

});

app.get('/', function(req, res){
	Message.find({}, function(err, message){
		if(err){
			res.json({error: 'Não foi possivel salvar o usuario'});
		} else {
			res.render('pages/index', {message:message});
		}
	});

	
});

app.post('/post', function(req, res){

	var name = req.param('name');
	var message = req.param('message');

	new Message({
		'name': name,
		'message': message,
		'created_at': new Date()
	}).save(function(error, message){
		if(error){
			res.json({error: 'Não foi possivel salvar o usuario'});
		} else {
			res.redirect('/');
		}
	});

});

app.delete('/delete/:id', function(req, res){
	var id = req.param('id');
	Message.findById(id, function(err, message){
		if(err){
			console.log(err);
		} else {
			message.remove(function(err){
				if(!err){
					res.json({response: 'Usuario excluido com sucesso'});
				}
			});
		}
	});
});

app.listen(3001);