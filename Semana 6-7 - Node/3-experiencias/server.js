const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload')
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload());


// USUARIOS

const register = require('./controllers/users/newUser');
const login = require('./controllers/users/loginUser');
const getUser = require('./controllers/users/getUser');
const isAuth = require('./middlewares/isAuth');
const modifyUser = require('./controllers/users/editUser');
const canEditUser = require('./middlewares/canEditUser');
const editUserAvatar = require('./controllers/users/editUserAvatar');
const editUserPassword = require('./controllers/users/editUserPassword');
const deleteUser = require('./controllers/users/deleteUser');

app.post('/register', register);
app.post('/login', login);
app.get('/users/:idUser', getUser);
app.put('/users/:idUser', isAuth, canEditUser, modifyUser);
app.put('/users/:idUser/avatar', isAuth, canEditUser, editUserAvatar);
app.put('/users/:idUser/password', isAuth, canEditUser, editUserPassword);
app.delete('/users/:idUser', isAuth, canEditUser, deleteUser)



// PRODUCTOS

const isAdmin = require('./middlewares/isAdmin');
const getExperiences = require('./controllers/products/getExperience');
const newExperience = require('./controllers/products/newExperience');
const deleteExperience = require('./controllers/products/deleteExperience');
const priceFilter = require('./controllers/products/priceFilter');

app.get('/experiences', getExperiences)
app.post('/experiences/new', isAuth, isAdmin, newExperience);
app.delete('/experiences/:idExperience', isAuth, isAdmin, deleteExperience)
app.get('/filtro', priceFilter);


// EMPRESAS

const newCompany = require('./controllers/company/newCompany');
const deleteCompany = require('./controllers/company/DeleteCompany');

app.post('/company/new', isAuth, isAdmin, newCompany);
app.delete('/company/:idCompany', isAuth, isAdmin, deleteCompany)


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