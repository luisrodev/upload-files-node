var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({dest: "./uploads"}));


app.set("view engine", "jade");

app.use(express.static("assets"));

app.get("/", function(req, res){
  //res.send("Working");
  res.render("index");
});

app.get("/newFile", function(req, res){
  res.render("newFile");
});

app.post("/files", function(req, res){
  console.log("FileName: " + req.body.fileName);
  console.log("Path: " + req.files.theFile.path);

  res.render("index", {uploadedFile: req.body.fileName});
});

app.get("/files", function(req, res){
  res.render("index");
});


app.listen(8080);
