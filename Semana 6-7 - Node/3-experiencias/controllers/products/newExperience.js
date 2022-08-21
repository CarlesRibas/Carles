const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const newExperience = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { titulo, precio, descripcion, localizacion, idEmpresaOrganiza  } = req.body;

    if (!titulo || !precio || !descripcion || !localizacion || !idEmpresaOrganiza) {
      throw generateError('Debes indicar los campos obligatorios', 400);
    }
    
    await connection.query(
      `insert into experiencia (titulo, precio, descripcion, localizacion, idEmpresaOrganiza) 
      values (?, ?, ?, ?, ?)`,
      [titulo, precio, descripcion, localizacion, idEmpresaOrganiza]
    );

    res.send({
      status:'Ok',
      message:`Experiencia creada con éxito`
    })

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = newExperience;