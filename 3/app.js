// const fs = require('fs');
// fs.writeFile('test.txt','abcdpoeee',function (err) {
// if (err) {
// return console.log(err);
// }
// console.log("Write operation done");
// var data = fs.readFileSync('test.txt');
// console.log("File data is "+data.toString());
// });

var fs = require('fs');
fs.writeFile('test.txt','hello my name is shviam',function(err){
    if(err){
        console.log('err')
    }
    console.log('data written successfully');
    fs.readFile('test.txt',function(err,data){
        if(err){
            console.log('err');
        }else{
            console.log(data.toString());
        }
    })
})