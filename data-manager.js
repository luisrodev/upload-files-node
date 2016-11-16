var fs = require('fs');

module.exports.loadJson = function(file, callback){
  fs.readFile(file, { encoding: 'utf8' }, function(err, data){
    if(err) return callback(err);
    try{
      var json = JSON.parse(data);
      callback(null, json);
    } catch(ex){
      callback(ex);
    }
  });
};

module.exports.writeJson = function(file, json, callback){
  fs.writeFile(file, JSON.stringify(json), callback);
};

module.exports.getFilePath = function(file, _id, callback){
  fs.readFile(file, { enconding: 'utf8 '}, function(err, data){
    if(err) return callback(err);
    try{
      var json = {};

      var jsondata = JSON.parse(data);

      var longidata = Object.keys(jsondata).length;

      for(var i = 0; i < longidata; i++){
        if(jsondata[i]['id'] == _id){
          json = jsondata[i];
        }
      }
      callback(null, json);
    }catch(ex){
      callback(ex);
    }
  });
};
