var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose   	= require("mongoose"),
	Campground 	= require("./models/campground"),
	seedDB 		= require("./seeds");



mongoose.connect("mongodb://localhost/YelpCamp"); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
seedDB();

//Campground.create(
//	{
//		name: "Granite Hill",
//		image: "https://farm9.staticflickr.com/8845/17275176759_9863e10d95.jpg"
//	}, function(err, campground){
//	if(err){
//		console.log(err);
//	} else {
//		console.log("New!!!")
//		console.log(campground);
//	}
//});

// ROOT PAGE
app.get("/", function(req, res){
	res.render("landing");
})

// PAGE CAMPGROUNDS
app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds:allCampgrounds});
		}
	});


	//res.render("campgrounds", {campgrounds:campgrounds});
});

// POST CAMPGROUNDS
app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};

	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

//
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("show",{campground: foundCampground});
		}
	});

});


// SERVER
app.listen(8080, function(){
	console.log("YelpCamp Server Has Started!! ");
});