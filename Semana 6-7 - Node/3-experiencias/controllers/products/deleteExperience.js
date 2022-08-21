const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const deleteExperience = async (req, res, next) => {
  let connection;

  try{
    connection = await getDB();

    const { idExperience } = req.params;

    const [experience] = await connection.query(
      `select id from experiencia where id = ?`,
      [idExperience]
    );

    if (experience.length < 1) {
      throw generateError(
        'No existe una experiencia con ese id',
        404
      );
    }

    await connection.query(
      `delete from experiencia where id = ?`,
      [idExperience]
    );

    res.send({
      status: 'Ok',
      message: 'Experiencia eliminada'
    });

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteExperience;