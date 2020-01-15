'use strict';

const net = require('net');

const socket = net.connect(3000, '192.168.1.104', () => console.log('connected!'));
socket.on('data', (data) => console.log(data.toString()));
const write = () => socket.write('hi Mark', () => console.log('data written'));
write();
socket.pause();
socket.resume();