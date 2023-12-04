// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve HTML form at the root
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Handle form submission with POST method
// app.post('/submit', (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;

//   // You can process the form data here (e.g., store it in a database)

  // res.send('Submitted successfully! Username: ${username}, Email: ${email}');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

var express = require('express');
var app = express();
var port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/submit',function(req,res){
  var username = req.body.username;
  var email = req.body.email;

  res.send('Username : '+username+' Email : '+email);
});

app.listen(port,function(){
  console.log('Server is running on port '+port);
});