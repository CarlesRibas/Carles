"use strict";

// Escribe un código que, partiendo de un array inicial, elimine las strings repetidas del mismo.

//Cuando sepas hacer funciones, haz que sea una función que reciba el array como parámetro (y por tanto elimine los lementos repetidos de cualquier array).

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

function clean(arr){
  let newArr = []

  for(let name of names){
    if(!newArr.includes(name)){ // Si no(!) incluye el nombre
      newArr.push(name)
    }
  }

  return newArr
}

console.log(clean(names))

console.log("")



// Otra forma de hacerlo

function filter(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i], i, arr.indexOf(arr[i]))
  }

  return arr.filter((name, i) => i === arr.indexOf(name)) 
}

console.log(filter(names))
