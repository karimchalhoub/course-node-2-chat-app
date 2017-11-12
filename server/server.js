const express = require('express');
const http = require('http');
const _ = require('lodash');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user conneted');

  socket.emit('newEmail', {
    from: 'karim@example.com',
    text: 'Hey. What is going on.',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'karim',
    text: 'Hey. This is my new message.',
    createdAt: 12345
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createdMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
