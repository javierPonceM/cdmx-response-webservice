
const fs = require('fs');
const path = require("path");
const dateHelper = require(path.join(__dirname,'../utils/dateHelper'));
const os = require('os');
const rootDir = process.cwd() ;
const publicDir = rootDir+'/public';

let createFile =(data,opt)=>{
    opt =  validOpts(opt);
    if(data && Array.isArray(data)){
      const filename = path.join( opt.dir, opt.name+"."+opt.ext);
      data =  prepareData(data,opt.sep);

      if (fs.existsSync(filename)) {
          fs.appendFile(filename,os.EOL+ data,function(err){
            if(err)console.log(err);
          });
      }else{
          fs.writeFileSync(filename, data);
      }
    }
return opt;
}

let prepareData = (data,separator)=>{
  let output = [];
  for (var i = 0; i < data.length; i++) {
      const row = [];
      obj = data[i];
      for (var key in obj){
         let value = obj[key];
         row.push(value)
     }
     output.push(row.join(separator));
  }
  return output.join(os.EOL)
}

let validOpts= (opt)=>{
  opt = opt || {}
  opt.name = opt.name || dateHelper.currentDate('YYYY_MM_DD');
  opt.ext = opt.ext || "csv";
  opt.dir = opt.dir || publicDir;
  opt.life = opt.life || 1;
  opt.sep = opt.sep || "|";
  return opt;
}

module.exports = {
  createFile:createFile
}
