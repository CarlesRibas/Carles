const express = require('express');
const app = express();

app.use(express.json());

//Controllers
const getHour = require('./controllers/getHour');
const getDirectory = require('./controllers/getDiretory');
const matematicas = require('./controllers/matts');
const newUser = require('./controllers/newUser');

//Endpoints
app.get('/hora', getHour);
app.get('/directorio', getDirectory);
app.post('/matematicas', matematicas);
app.post('/newUser', newUser)


// Middleware de Error
app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.httpStatus || 500);

  res.send({
    status: 'Error',
    message: error.message,
  });
}); 

// Middleware de NOT FOUND
app.use((req, res) => {
  res.status(404);
  
  res.send({
    status: 'Error',
    message: 'Not found',
  });
});

app.listen(4000,() => {
  console.log('Server listening at http://localhost:4000')
});