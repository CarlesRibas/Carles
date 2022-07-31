"use strict";

//Escribir una función que reciba un número
// Obtener la información de la casa que se corresponda con el número y a partir de ahí, sacar el NOMBRE de su lord.

//Puede haber errores:
///// Que lo introducido no sea un número
//// Que el número no se corresponda con ninguna casa
//// Que la casa no tenga lord actualmente


// Si ocurre un error, tenemos que gestionarlo



// Si el numero es 2 -> https://anapioficeandfire.com/api/houses/2

//Si el número es 233 -> https://anapioficeandfire.com/api/houses/233


let APIurl = "https://anapioficeandfire.com/api/houses/"

async function getData(url){
  let res = await fetch(url)
  let data = await res.json()

  return data
}

let num = prompt("Introduce un número")

async function getLocationType(num){
  try{
    if(isNaN(num)){
      throw new Error("Debes introducir un número.")
    }
    
    let houseURL = APIurl + num

    let houseData
    try{houseData = await getData(houseURL)}
    catch(e){
      throw new Error("Esta casa no existe.")
    }

    let charURL = houseData.currentLord
    if(!charURL){
      throw new Error("Esta casa no tiene Lord.")
    }

    let charData = await getData(charURL)

    console.log(charData.name)

  }catch(e){
    console.log(e.message)
  }
}

getLocationType(num)








