var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// cria parametro /:thing
app.get("/leao/:thing", function(req, res){
	// resgata parametro da url
	var thing = req.params.thing;
	res.render("home.ejs", {thingVar: thing});
	//res.send("Hi there");
});

//app.get("*", function(req, res){
//	res.send("SEND ALL PAGES")
//})

// cria subpast localhost:300/bye



app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", autor: "Diego"},
		{title: "Post 2", autor: "Gnew"},
		{title: "Post 3", autor: "Anon"}
		];

	res.render("posts.ejs", {posts: posts});
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(3000, function(){
	console.log("Start Server in 3000")
});