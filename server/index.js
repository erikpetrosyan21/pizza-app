const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io', {
    pingInterval: 60000,
    pingTimeout: 60000
})(http);

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('saass');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('joinRoom', (data) => {
        socket.join(data, () => {
            console.log('ok ' + data);
        });
        io.to(data).emit('sendEvent', data);
        io.to(data).emit('notifConnect', true);
    });
    socket.on('disconnect', () => { socket.disconnect(); });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});