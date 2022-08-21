const getDB = require("../db/getDB");
const { generateError } = require("../helpers");

const isAdmin = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const idReqUser = req.userAuth.id;

    const [usuario] = await connection.query(
      `select tipo from usuario where id = ?`,
      [idReqUser]
    );

    if (usuario[0].tipo !== 'admin')
      throw generateError('No eres administrador, no puedes insertar una nueva experiencia')
    
    next()

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = isAdmin;