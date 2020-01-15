'use strict';

const http = require('http');
const fs = require('fs');
app.use(express.static(__dirname + '/public'));
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html',
    })
    fs.readFile('index.html', null, (err, data) => {
        res.write(data);
    });
})

server.listen(3000, 'localhost');