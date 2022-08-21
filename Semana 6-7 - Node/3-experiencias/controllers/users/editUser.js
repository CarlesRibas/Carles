const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');

const modifyUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { idUser } = req.params;

    const { nombre, apellido1, apellido2, fecha_nac, email } = req.body;

    if (!(nombre || apellido1 || apellido2 || fecha_nac || email)) {
      throw generateError('Si no vas a hacer nada pa que tocas', 400);
    }

    const [usuario] = await connection.query(
      `select nombre, apellido1, apellido2, fecha_nac, email from usuario where id = ?`,
      [idUser]
    );

    await connection.query(
      `update usuario set nombre = ?, apellido1 = ?, apellido2 = ?, fecha_nac = ?, email = ? where id = ?`,
      [nombre || usuario[0].nombre, apellido1 || usuario[0].apellido1, apellido2 || usuario[0].apellido2, fecha_nac || usuario[0].fecha_nac, email || usuario[0].email, idUser]
    )

    res.send({
      status: 'Ok',
      message: 'Datos del usuario modificados con éxito'
    })

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = modifyUser;