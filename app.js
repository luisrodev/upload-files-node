var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');


var dataManager = require('./data-manager.js');

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

app.get("/download/:id", function(req, res){
  var _id = req.params.id;
  var rute = "";

  dataManager.getFilePath("data/data.json", _id, function(err, json){
    rute = json['filePath'];
    res.download(rute);
  });
});

app.post("/files", function(req, res){
  dataManager.loadJson("data/data.json", function(err, json){

    var _id  = Object.keys(json).length + 1;

    var formatedPath = req.files.theFile.path.replace("\\", "/")

    json.push({id: _id, fileName: req.body.fileName, filePath: formatedPath});

    dataManager.writeJson("data/data.json", json, function(err){
      if(err){
        next(err);
      }else{
        res.render("listFiles", {result: json});
      }
    });
  });
});

app.get("/files", function(req, res){
  dataManager.loadJson("data/data.json", function(err, json){
    res.render("listFiles", {result: json});
  });
});

app.listen(8080);
