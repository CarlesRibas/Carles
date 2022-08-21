const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const newCompany = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { nombre } = req.body;

    if (!nombre) {
      throw generateError('Debes indicar los campos obligatorios', 400);
    }
    
    await connection.query(
      `insert into empresa (nombre) 
      values (?)`,
      [nombre]
    );

    res.send({
      status:'Ok',
      message:`Empresa creada con éxito`
    })

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = newCompany;