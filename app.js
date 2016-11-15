var express = require('express');

var app = express();

app.get("/", function(req, res){
  res.send("Working");
});


app.listen(8080);
