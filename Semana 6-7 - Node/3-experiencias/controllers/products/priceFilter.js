const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');

const priceFilter = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB()

    const { maxPrice } = req.query;

    let consulta = `select * from experiencia`;

    if (maxPrice){
      consulta += ` where precio <= ?`;
    }

    const [experiencia] = await connection.query(
      consulta, [maxPrice]
    );
    
    if (experiencia.length < 1){
      throw generateError('No hay ningún servicio con un precio igual o menor al indicado', 404);
    }

    res.send({
      status: 'Ok',
      Experiencias: experiencia
    });

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = priceFilter;