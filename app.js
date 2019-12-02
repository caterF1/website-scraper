const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({limit:"5mb", extended:true}));
app.use("/public", express.static(__dirname + "/public"));

app.use("/", indexRoutes);

const port = process.env.PORT || config.port;
app.listen(port, process.env.IP, function(){
    console.log(`Website scraper server started on port ${port}`);
})