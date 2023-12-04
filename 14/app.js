// const fs = require('fs');

// // Create a readable stream from a file
// const filePath = 'input.txt';
// const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// // Event: 'data' - Triggered when data is available
// readStream.on('data', function (chunk) {
//     console.log('Received chunk of data:');
//     console.log(chunk);
// });

// // Event: 'end' - Triggered when the stream ends
// readStream.on('end', function () {
//     console.log('End of file reached.');
// });

// // Event: 'error' - Triggered when an error occurs
// readStream.on('error', function (err) {
//     console.error('Error reading the file:', err);
// });

var fs = require('fs');
var path ='input.txt';
var readStream = fs.createReadStream(path,{encoding:'utf8'});

readStream.on('data',function(chunk){
  console.log('Data Received');
  console.log(chunk);
});

readStream.on('end',function(){
  console.log('file ended');
});

readStream.on('error',function(){
  console.log('error occured');
})