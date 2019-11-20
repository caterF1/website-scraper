var express = require("express");
var app = express();
var bodyParser = require("body-parser");



//requiring routes
var indexRoutes = require("./routes/index");
app.set("view engine", "ejs");
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({limit:"5mb", extended:true}));
app.use("/public", express.static(__dirname +"/public"));

app.use("/", indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
    console.log("The Website Scraper server has started");
})


