/**
 * ###################
 * ### Ejercicio 2 ###
 * ###################
 *
 * Servidor web que escucha en el puerto 4000
 *
 * - Cuando se llama a la ruta '/curso', método get devuelve el status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama a cualquier ruta distinta devuelve status `200` con el body:
 *
 *      {
 *          message: 'Hello World'
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

app.use((req, res) => {
  
  res.status(200);

  res.send({
    curso: 'Hello World',
 });

});

app.listen(4000, () => {
  console.log('server listening at http://localhost:4000')
});