/**
 * ###################
 * ### Ejercicio 1 ###
 * ###################
 *
 * Crea un servidor web que escucha cualquier request en el puerto 4000 y devuelve siempre un status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 */

// Cómo podemos ir haciendo los ejercicios?
// Primero de nada, en el package.json podemos modificar el script dev para ejecutar este archivo
// y el siguiente

///////

const express = require('express');
const app = express(); // Crear un servidor/aplicación

app.use((req, res) => {
  res.status(200);

  res.send({
    curso: 'backend',
 });

});

app.listen(4000, () => {
  console.log('server listening at http://localhost:4000')
});