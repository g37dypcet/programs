var express = require('express');
var app = express();
var port =3000;

var router = express.Router();

router.get('/',function(req,res){
	console.log('router working');
	res.end();
});

app.use(router);

app.listen(port,function(){
	console.log('server is running on port '+port);
})