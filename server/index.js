const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io', {
    pingInterval: 10000,
    pingTimeout: 5000
  })(http);

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('saass');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('joinRoom', (data) => {
        socket.join(data, () => {
            console.log('ok ' + data)
        });
        io.to(data).emit('sendEvent', data);
    });
    socket.on('disconnect', () =>{ socket.disconnect(); });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});