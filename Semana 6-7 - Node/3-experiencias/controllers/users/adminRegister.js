const getDB = require('../../db/getDB');
const bcrypt = require('bcrypt');
const { generateError } = require('../../helpers');

const adminRegister = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB()

    const { nombre, apellido1, apellido2, fecha_nac, email, password } = req.body;

    if (!nombre || !apellido1 || !fecha_nac || !email || !password) {
      throw generateError('Faltan campos obligatorios', 400);
    }

    const [usuario] = await connection.query(
      `select id from usuario where email = ?`,
      [email]
    );

    if (usuario.length > 0) {
      throw generateError('Ya existe un usuario con ese email', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await connection.query(`
      insert into usuario(nombre, apellido1, apellido2, fecha_nac, email, password, tipo, createdAt)
      values (?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellido1, apellido2, fecha_nac, email, hashedPassword, 'admin', new Date()]
    );

    res.send({
      status: 'Ok',
      message: 'Usuario creado con éxito'
    });

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = adminRegister;