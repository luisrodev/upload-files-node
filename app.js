var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.use(express.static("assets"));

app.get("/", function(req, res){
  //res.send("Working");
  res.render("index");
});


app.listen(8080);
