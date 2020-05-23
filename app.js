//jshint esversion:6

const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");

//Initialising an express object
const app = express();

//Setting up ejs files
app.set("view engine","ejs");

//Setting up body parser so we can access req.body for any routes
app.use(bodyParser.urlencoded({
  extended: true
}));

//Allow our server to serve up static files in "public" folder
app.use(express.static("public"));

//To respond to a HTTP Get request to the root route
app.get("/", function(req, res){
  res.send("Hello");
});

//To initialise which port should the brower listen to when website first fires up
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
