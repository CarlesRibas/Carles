const express = require('express');
const app = express();
app.use(express.json());


const register = require('./controllers/register');
const login = require('./controllers/login');
const getUser = require('./controllers/getUser');

app.post('/register', register);
app.post('/login', login);
app.get('/usuario/:idUser', getUser);


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