// needed modules
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

// sets port and grabs express
var app = express();
var PORT = process.env.PORT || 8080;

// run data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// run Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
var routes = require("./controllers/burgersController.js");
app.use(routes);

// loads static files
app.use(express.static("./public"));

// starts Express
app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});