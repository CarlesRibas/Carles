const matematicas = (req, res, next) => {

  try{
    const { number } = req.body;

    if (isNaN(number)) {
      const error = new Error ('No es un número');
      error.httpStatus = 400;
      throw error;
    } 

    res.send({
      status: 'Ok',
      num: number * 2
    });

  } catch (error) {
    next(error);
  }
}

module.exports = matematicas;
