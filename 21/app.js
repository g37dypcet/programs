var express = require('express');
var app = express();
var port =3000;

var middleware1 = function(req,res,next){
	console.log('middleware 1 called');
	next();
};

var middleware2 = function(req,res,next){
	console.log('middleware 2 called');
	next();
};

var routehandler = function(req,res){
	res.send('hello from express');
};

app.use('/path1',middleware1);
app.use('/path2',middleware2);

app.get('/',routehandler);

app.listen(port,function(){
	console.log('Servevr is running on port '+port);
});
