/**
 * ###################
 * ### Ejercicio 4 ###
 * ###################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando la request es un 'POST' a '/data', se devuelve el *JSON* recibido.
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status `404` (not found)
 * con el body:
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 */

// Lo que se pretende en el POSt es que lo que se escriba en el JSON del body se envie como res.send() es una tontería
// solo para practicar

const express = require('express');
const app = express();
app.use(express.json());

app.post('/data', (req, res) => {

  const {dato} = req.body;

  res.send({
    status: 'Ok',
    message: `${dato}`,
  });

});


app.use((req, res) => {

  res.status(404);

  res.send({
    status: 'Error',
    message: 'No lo encuentro',
  });

})

app.listen(4000, () => {
  console.log('server listening at http://localhost:4000')
});