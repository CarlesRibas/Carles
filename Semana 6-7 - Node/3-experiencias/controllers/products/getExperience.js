const getDB = require("../../db/getDB");

const getExperiences = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { search, maxPrice, order, direction } = req.query

    const validOrderOptions = ['titulo', 'precio', 'localizacion'];

    const validDirectionOptions = ['desc', 'asc'];

    const orderBy = validOrderOptions.includes(order) ? order : 'precio';

    const orderDirection = validDirectionOptions.includes(direction)
        ? direction
        : 'desc';

    let consulta = `select * from experiencia`;

    if (search) {
      consulta = await connection.query(
        consulta + `where titulo like ? order by
        ${orderBy} ${orderDirection}`,
        [`%${search}%`, maxPrice]
      );

    } else {
      [experiencias] = await connection.query(
        `select * from experiencia order by ${orderBy} ${orderDirection}`);
    }

    const data = [];

    res.send({
      status: 'Ok',
      data: data
    });


  } catch (error) {
    next(error)
  } finally{
    if (connection) connection.release();
  }
}

module.exports = getExperiences;