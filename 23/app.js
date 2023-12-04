const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 1. Set the status code of the response
  res.send('Hello from Express!');
});

app.get('/path1',function(req, res){
  res.json({ message: 'Hello from Express!' });
});

app.get('/path2',function(req, res){
  res.set('Content-Type', 'text/plain');
  console.log(`Content-Type header: ${res.get('Content-Type')}`);
});

app.get('/path3',function(req, res){
  res.status(200);
  console.log(`Status code: ${res.statusCode}`);
});

app.get('/path4',function(req, res){
  res.redirect('/about');
});

app.get('/about', (req, res) => {
  res.send('This is the About page');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
