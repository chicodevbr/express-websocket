const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Mensagem recebida :', message);
    ws.send(message.toString());
  });
});

server.listen(process.env.PORT || 9898, () => {
  console.log('Servidor conectado na porta: ', server.address().port);
});
