
const saludo = (nombre) => {
  return `Hola ${nombre}, qué tal estás?`;
};

const bucle = (num) => {
  for (let i = 0; i <=num; i++){
    console.log(i)
  }
};

module.exports = {
  saludo,
  bucle,
}