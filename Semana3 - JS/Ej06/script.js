"use strict";


// Edita el archivo script.js para crear una función que haga lo siguiente:

// Generar una contraseña (número entero aleatorio del 0 al 100)
// Pedir al usuario que introduzca un número dentro de ese rango\*.
// Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado; si no, el mensaje indicará si la contraseña en un número mayor o menor al introducido y dará una nueva oportunidad.
// El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido.

// Para pedir datos al usuario utiliza la función _prompt_:

// ¡OJO! Prompt **siempre** devuelve un string.




// MI SOLUCIÓN
  
function game(){

  let min = 0;
  let max = 100;
  let num = Math.floor(Math.random()*(max-min+1)+min);
  console.log (num)
  let ronda = 5
  
  for(let i = 0; i < ronda; i++){
    let numUser = +prompt("Introduce un número del 0 al 100");
    if (numUser === num){
      alert("¡Has ganado!")
      return
    } else if (numUser > num){
      alert("El número introducido es mayor.")
    } else if (numUser < num){
      alert("El número introducido es menor.")
    } else{
      alert("Introduce un número válido.")
    }
  }

  alert ("Has perdido. :(")
}

game()



// CORRECCIÓN VISTA EN CLASE


/*
function game(min, max, tries){

  let pass = getRandom(min, max)
  console.log(pass)


  for(let i = 0; i < tries; i++){
    
    let userPass = +prompt(`Itroduce un número entre el ${min} y el ${max}`)
    
    if(userPass === pass){
      alert("Has ganado!!")
    return
    }

    if(i < tries - 1){ 
    alert(`El número introducido es ${userPass < pass ? "menor" : "mayor"} que el buscado.
    Has introducido el ${userPass}`)
    }

  } 

  alert(`Has perdido. El número buscado era el ${pass}`)

}

game(0, 100, 5)
*/