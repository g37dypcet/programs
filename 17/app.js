// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/example', function(req, res) {
// 	const method = req.method;
// 	res.send('HTTP method used: ' + method);
//   });
  
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

var express = require('express');
var app = express();
var port = 3000;

app.get('/example',function(req,res){
	var method = req.method;
	res.send('HTTP METHOD USED :'+method);
});

app.listen(port,function(){
	console.log('Server is running on port : '+port);
})