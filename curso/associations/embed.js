var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String
	posts: [postSchema];
});

var User = mongoose.model("User", userSchema);

// POST - title, content

var postSchema = new mongoose.Schema({
	title: String,
	content: String

})

var Post = mongoose.model("Post", postSchema);

var newUser = new User({
	email: "diegosarzi@gmail.com",
	name: "Diego Sarzi"
});

//newUser.save(function(err, user){
//	if(err){
//		console.log(err);
//	} else {
//		console.log(user);
//	}
//});

var newPost = new Post({
	title: "Reflection on Apples",
	content: "They are delicius"
});

newPost.save(function(err, post){
	if(err){
		console.log(err);
	} else {
		console.log(post);
	}
});