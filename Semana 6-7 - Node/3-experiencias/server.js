const express = require('express');
const app = express();
app.use(express.json());


// USUARIOS

const register = require('./controllers/users/register');
const login = require('./controllers/users/login');
const getUser = require('./controllers/users/getUser');

app.post('/register', register);
app.post('/login', login);
app.get('/usuario/:idUser', getUser);


// PRODUCTOS

const priceFilter = require('./controllers/products/priceFilter');

app.get('/filtro', priceFilter);



app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.httpStatus || 500);

  res.send({
    status: 'Error',
    message: error.message,
  });
});

app.use((req, res) => {
  res.status(404);

  res.send({
    status:'Error',
    message: 'Not found'
  });
});

app.listen(4000, () => {
  console.log('Server listening at http://localhost:4000');
});