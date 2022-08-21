const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const deleteCompany = async (req, res, next) => {
  let connection;

  try{
    connection = await getDB();

    const { idCompany } = req.params;

    const [company] = await connection.query(
      `select id from empresa where id = ?`,
      [idCompany]
    );

    if (company.length < 1) {
      throw generateError(
        'No existe una empresa con ese id',
        404
      );
    }

    await connection.query(
      `delete from empresa where id = ?`,
      [idCompany]
    );

    res.send({
      status: 'Ok',
      message: 'Empresa eliminada'
    });

  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteCompany;