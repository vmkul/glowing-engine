'use strict';

const net = require('net');

const hostname = 'localhost';
const port = 3000;

const server = net.createServer((socket) => {
  console.log('client connected');
  socket.write('Hello there');
  socket.on('error', (e) => console.log('Connection lost'));
  socket.on('data', (data) => console.log('Message from client: ' + data.toString()));
  socket.on('end', () => console.log('client disconnected'));
}).on('error', (err) => {
  // handle errors here
  console.log('something happened ' + err);
});

// Grab an arbitrary unused port.
server.listen(port, hostname, () => {
  console.log('opened server on', server.address());
});


// const socket = net.connect(port, hostname, () => console.log('Connection established!'));
// socket.on('data', (data) => console.log(data.toString()));
