'use strict';

const net = require('net');

const hostname = '216.58.209.14';
const port = 80;

const socket = new net.Socket();
socket.connect(port, hostname, () => console.log('Connection established!'));
socket.on('data', (data) => console.log('Message from server: ' + data.toString()));
