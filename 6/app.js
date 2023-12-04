// fs.mkdir
// fs.rmdir
// fs.readFile
// fs.writeFile
// fs.unlink
var fs = require('fs');

fs.mkdir('shivam',function(err){
  if(err){
    console.log('err');
  }else{
    console.log('directory created successfully !');
  }
})

fs.rmdir('shivam',function(err){
  if(err){console.log('err')}
  else{console.log('directory deleted successfully !')}
})

fs.readFile('input.txt',function(err,data){
  if(err){console.log(err)}
  else{
    console.log(data.toString());
  }
})

fs.writeFile('input.txt','from dypcet',function(err){
  if(err){
    console.log(err);
  }else{
    console.log('data written success');
  }
})

fs.unlink('input.txt',function(err){
  if(err){
    console.log('err');
  }else{
    console.log('file deleted !')
  }
})