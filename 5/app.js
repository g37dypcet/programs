// const fs = require("fs"); 

// let directory_name = "dir"; 
// let filenames = fs.readdirSync(directory_name); 
// console.log("Contents in directory:"); 
// filenames.forEach((file) => { 
// 	console.log(file); 
// }); 


var fs = require('fs');
path = 'dir'
fs.readdir(path,function(err,files){
	if(err){
		console.log(err);
	}else{
		console.log('contents of directory :');
		files.forEach(file => {console.log(file);});
	}
});