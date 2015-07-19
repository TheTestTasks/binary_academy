var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));

var messages = [];
io.on('connection', function(socket) {
    io.emit('join', messages);

    socket.on('chat message', function(msg) {
        messages.push(msg);
        io.emit('chat message', msg);
    });
});

http.listen(8000, function() {
    console.log('Listening on http://127.0.0.1:8000');
});