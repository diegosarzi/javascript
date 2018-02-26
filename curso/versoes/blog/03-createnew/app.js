var bodyParser 	= require("body-parser"),
	express 	= require("express"),
	mongoose 	= require("mongoose"),
	app 		= express();

// CONECT BANCO - TEMPLATE EJS - APP CONF
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// ESQUEMA PARA MANIPULACAO DO BANCO MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//Blog.create({
//	title: "Teste",
//	image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/JPEG_example_JPG_RIP_050.jpg",
//	body: "Hello!"
//});

// RESTFUL ROUTES
// INDEX ROUTE
app.get("/", function(req, res){
	res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		} else {
			res.render("index", {blogs:blogs});
		}
	});
	
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			console.log(err);
			res.render("new");
		} else {
			res.redirect("/blogs");
		}
	});
});












// SERVER ON
app.listen(3000, function(){
	console.log("Server is Running!")
});