"use strict";

// Una pizerría ofrece pizzas "mitad y mitad".

//Cada mitad debe corresponderse a una pizza de su catálogo, pero éste cambia constantemente, por lo que el número de combinaciones posibles, también.

// Escribe una función que reciba el catálogo de pizzas (un array de strings) y devuelva una lista de las combinaciones.

// Seguramente en tu primera aproximación devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa, barbacoa y carbonara) pero ¡son la misma pizza!

// De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no sería una combinación, sino una pizza normal.

// ¿Serías capáz de solucionar eso, sin añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


function combinar(catalogo){
  let newArr = []

  for (let i = 0; i < catalogo.length; i++){

    for (let j = i + 1; j < catalogo.length; j++)
    
    newArr.push(`${catalogo[i]} y ${catalogo[j]}`)
  }

  return newArr
}

console.log(combinar(catalogo))


