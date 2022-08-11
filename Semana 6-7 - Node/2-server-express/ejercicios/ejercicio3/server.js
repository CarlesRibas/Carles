/**
 * ###################
 * ### Ejercicio 3 ###
 * ###################
 *
 *  Servidor web que escucha en el puerto 4000
 *
 *  - Cuando se llama a '/curso' con el método GET, devuelve status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 *  - Cuando se llama al endpoint '/message' con metodo GET, devuelve status `200` con body:
 *
 *      {
 *          message: 'Hello World'
 *      }
 *
 *  - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status `404` (not found)
 *      con el body:
 *
 *      {
 *          message: 'No lo encuentro :('
 *      }
 */

const express = require('express');
const app = express();

app.get('/curso', (req, res) => {

  res.status(200);

  res.send({
    curso: 'Backend',
  });

});

app.get('/message', (req, res) => {

  res.status(200);

  res.send({
    message: 'Hello World',
  });

});

app.use((req, res) => {

  res.status(404);

  res.send({
    status: 'Error',
    message: 'Not found',
  });

})

app.listen(4000, () => {
  console.log('server listening at http://localhost:4000')
});