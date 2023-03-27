import express from 'express';

const server = express(); 

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/ola', (req, res) => {
  res.send('Olá, Mundo');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});