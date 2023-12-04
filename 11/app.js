// const net = require('net');

// // Function 1: Creating a TCP server
// const server = net.createServer((socket) => {
//   console.log('Client connected');

//   // Function 2: Handling data received from the client
//   socket.on('data', (data) => {
//     console.log(`Received data from client: ${data}`);
//   });

//   // Function 3: Handling client connection termination
//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });
// });

// // Function 4: Starting the TCP server and listening on a specific port
// server.listen(3000, 'localhost', () => {
//   console.log('Server started and listening on port 3000');
// });

// // Function 5: Checking if a given IP address is a valid IPv4 or IPv6 address
// const ipAddress = '192.168.0.1';
// const isIpAddressValid = net.isIP(ipAddress);
// console.log(`Is ${ipAddress} a valid IP address? ${isIpAddressValid}`);

const net = require('net');
const server = net.createServer(function(socket){
  console.log('client connnected');

  socket.on('data',function(data){
    console.log('received data from client : ', data.toString());
  });

  socket.on('end',function(){
    console.log('client discconneted');
  })
});


const PORT = 3000;
server.listen(PORT,function(){
  console.log('server listening on port'+PORT);
});

const client = net.createConnection({port:PORT},function(){
  console.log('connected to server');
  client.write('hello server');
  client.end();
})


// const server = net.createServer(function(socket){
//   console.log('Client Connected');

//   socket.on('data',function(data){
//     console.log('Data received from client : ', data.toString());
//   });

//   socket.on('end',function(){
//     console.log('Client Disconnected');
//   })
// });

// const PORT = 3000;
// server.listen(PORT,function(){
//   console.log('Server is listening on port : '+PORT);
// });

// const client = net.createConnection({port:PORT},function(){
//   console.log('Connected to Server');
//   client.write('Hellow Server');
//   client.end();
// });