const url = require('url');
const path = require('path');
const fs = require('fs');
const config = require('config');
const rootDir = process.cwd() ;
const publicDir = rootDir+'/public';

let prepareEnvFile = (req, res, next) => {
  let fileName = config.get("webchat.envfile")
  if(req.originalUrl.indexOf(fileName)>=0){
    console.log("Prepare file: ",fileName);
    var pathFile = url.parse(req.originalUrl).pathname;

    if (fs.existsSync(publicDir+pathFile)) {
      var file = require(publicDir+pathFile);
      file.urlApi = config.get('webchat.urlApi');
      fs.writeFile(publicDir+"/env_temp.json", JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        res.sendFile(publicDir+"/env_temp.json");
      });
    }else{
        next();
    }
  }else{
    next();
  }
}
module.exports = {
  prepareEnvFile:prepareEnvFile
}
