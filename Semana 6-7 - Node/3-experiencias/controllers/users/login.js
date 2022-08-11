const getDB = require('../../db/getDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateError } = require('../../helpers');
require('dotenv').config();

const login = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { email, password} = req.body;

    if (!email || !password) {
      throw generateError('Faltan campos obligatorios, 400');
    }

    const [usuario] = await connection.query(
      `select id, email, password from usuario where email = ?`,
      [email]
    );

    if (usuario.length < 1) {
      throw generateError(
        'No existe un usuario registrado con ese email',
        404
      );
    }

    const validPassword = await bcrypt.compare(password, usuario[0].password);

    if (!validPassword) {
      throw generateError('La contraseña es incorrecta', 401);
    }

    const tokenInfo = {
      id: usuario[0].id,
    }

    const token = jwt.sign(tokenInfo, process.env.SECRET, {
      expiresIn: '10d',
    });

    res.send({
      status: 'Ok',
      authToken: token
    });

  } catch (error) {
     next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = login;