const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Usuário Conectado');

  socket.on('send_message', (data) => {
    io.emit('received_message', data)
  })


  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
  
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});