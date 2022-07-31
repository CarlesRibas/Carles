"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];



// Utiliza los métodos funcionales de array para resolver las siguientes propuestas:



// 1. Obtén la suma total de todas las edades de las personas.

/*
function reducer (acc, el){
  return acc + el.age
}

let edadTotal = persons.reduce(reducer,0)
*/

let edadTotal = persons.reduce((acc, el) => acc + el.age,0)

console.log(edadTotal)

console.log("")



// 2. Obtén la suma total de todas las edades de las personas francesas.

/*
function myFilter(fr){
  return fr.country === "FR"
}

let franceses = persons.filter(myFilter)
*/

let franceses = persons.filter(el => el.country === "FR")

let edadTotalFR = franceses.reduce((acc, el) => acc + el.age,0) // Código copiado del ejercicio anterior pero sustituyendo "persons" por "franceses".
console.log(edadTotalFR)

console.log("")



// 3. Obtén un array con el nombre de todas las mascotas.

/*
function myMap(el){
  return el.pet.name
}

let nombreMascotas = persons.map(myMap)
*/

let nombreMascotas = persons.map(el => el.pet.name)

console.log(nombreMascotas)

console.log("")



// 4. Obtén un array con las personas que tengan gato.

/*
function myFilter(el){
  return el.pet.type === "gato"
}

let personasConGato = persons.filter(myFilter)
*/

let personasConGato = persons.filter(el => el.pet.type === "gato")

console.log(personasConGato)

console.log("")



// ! A partir de aquí es útil usar find, pero se puede con filter



// 5. Obtén un array con los coches de los españoles.

/*
function myFilter(el){
  return el.country === "ES"
}

let espanoles = persons.filter(myFilter)
*/

let espanoles = persons.filter(el => el.country === "ES")

/*
function myMap(el){
  return el.car
}

let cochesEspanoles = espanoles.map(myMap)
*/

let matriculasEspanoles = espanoles.map(el => el.car)

/*
function myFilter(el){
  return matriculasEspanoles.includes(el.id)
}

let cochesEspanoles = cars.filter(myFilter)
*/

let cochesEspanoles = cars.filter(el => matriculasEspanoles.includes(el.id))


console.log(cochesEspanoles)

console.log("")






//let cochesEspanoles = matriculasEspanoles.map(el => cars.find (car => car.id === el))


/**
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

