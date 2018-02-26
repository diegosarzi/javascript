var bodyParser 	= require("body-parser"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer"),
	express 	= require("express"),
	mongoose 	= require("mongoose"),
	app 		= express();

// CONECT BANCO - TEMPLATE EJS - APP CONF
mongoose.connect("mongodb://localhost/ottoniel_admin");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


// ESQUEMA PARA MANIPULACAO DO BANCO MONGOOSE/MODEL CONFIG
var salasSchema = new mongoose.Schema({
	sala: String,
	periodo: String,
	alunos: String
});
var Salas = mongoose.model("Salas", salasSchema);

var alunosSchema = new mongoose.Schema({
	nome: String,
	periodo: String,
	sala: String,
	presenca: Boolean,
	pass: String
});
var Alunos = mongoose.model("Alunos", alunosSchema);

var admsSchema = new mongoose.Schema({
	nome: String,
	user: String,
	pass: String
});
var Adms = mongoose.model("Adms", admsSchema);


// SYSTEM ROUTES
// HOME ROUTE REDIRECT
app.get("/", function(req, res){
	res.render("home");
});


// NOVAS SALAS ROUTE
app.get("/cadastro_salas", function(req, res){
	Salas.find({}, function(err, salas){
		if(err){
			console.log(err);
		} else {
			res.render("cadastro_salas", {salas:salas});
		}
	});
});

app.post("/cadastro_salas", function(req, res){
	// req.body.blog.body = req.sanitize(req.body.blog.body);
	 Salas.create(req.body.salas, function(err, newSalas){
	 	if(err){
	 		console.log(err);
	 	} else {
	 		res.redirect("/cadastro_salas");
	 	}
	});
});

// DELETE ROUTE
app.delete("/cadastro_salas/:id", function(req, res){
	Salas.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/cadastro_salas");
		}
	})
});



// NOVOS ALUNOS ROUTE
app.get("/cadastro_alunos", function(req, res){
	Alunos.find({}, function(err, alunos){
		if(err){
			console.log(err);
		} else {
			res.render("cadastro_alunos", {alunos:alunos});
		}
	});
});

app.get("/alunos", function(req, res){
	Alunos.find({}, function(err, alunos){
		if(err){
			console.log(err);
		} else {
			res.render("cadastro_alunos", {alunos:alunos});
		}
	});
});


app.post("/alunos", function(req, res){
	Alunos.create(req.body.alunos, function(err, newAlunos){
 	if(err){
 		console.log(err);
 	} else {
 		res.redirect("/cadastro_alunos");
 	}
});
})

// DELETE ROUTE
app.delete("/alunos/:id", function(req, res){
	Alunos.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/cadastro_alunos");
		}
	})
});


// NOVOS ADMS ROUTE
app.get("/cadastro_adm", function(req, res){
	Adms.find({}, function(err, adms){
		if(err){
			console.log(err);
		} else {
			res.render("cadastro_adm", {adms:adms});
		}
	});
});

// SHOW ROUTE
app.get("/cadastro_adm/:id", function(req, res){
	Adms.findById(req.params.id, function(err, foundAdms){
		if(err){
			console.log(err);
		} else {
			res.render("edit_adm", {adms:foundAdms});
		}
	})
});


app.post("/cadastro_adm", function(req, res){
	Adms.create(req.body.adms, function(err, newAdms){
 	if(err){
 		console.log(err);
 	} else {
 		res.redirect("/cadastro_adm");
 	}
});
})

// DELETE ROUTE
app.delete("/cadastro_adm/:id", function(req, res){
	Adms.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/cadastro_adm");
		}
	})
});



// EDIT ROUTE
app.get("/cadastro_adm/:id/edit", function(req, res){
	Adms.findById(req.params.id, function(err, foundAdms){
		if(err){
			console.log(err);
		} else {
			res.render("edit_adm", {adms:foundAdms});
		}
	});
});

// UPDATE ROUTE
app.put("/cadastro_adm/:id", function(req, res){
	Adms.findByIdAndUpdate(req.params.id, req.body.adms, function(err, updateAdm){
		if(err){
			console.log(err);
		} else {
			res.redirect("/cadastro_adm")
		}
	});
});


// SERVER ON
app.listen(3000, function(){
	console.log("Server is Running!")
});