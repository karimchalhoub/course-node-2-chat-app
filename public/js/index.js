var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey. This is Karim'
  });

  socket.emit('createMessage', {
    from: 'Tarek',
    text: 'Hey. This is from Tarek to Server'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New Email ', email);
});

socket.on('newMessage', function (message) {
  console.log('New message ', message);
});
