import express from 'express';
import morgan from 'morgan';

const server = express(); 

server.use(morgan('tiny'));

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/ola', (req, res) => {
  res.send('Olá, Mundo');
});

server.get('/hello/en', (req, res) => {
  const name = req.query.name;

  const result = {
    message: `Hello, ${name}!`,
  };

  res.json(result);
});

server.get('/hello/pt/:name', (req, res) => {
  const name = req.params.name;

  const result = {
    message: `Olá, ${name}!`,
  };

  res.json(result);
});

server.get('/hello/pt/:name', (req, res) => {
  const name = req.params.name;

  const result = {
    message: `Olá, ${name}!`,
  };

  res.json(result);
});

server.post('/hello/es', (req, res) => {
  const name = req.body.name;

  const result = {
    message: `¡Hola, ${name}!`,
  };

  res.json(result);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});