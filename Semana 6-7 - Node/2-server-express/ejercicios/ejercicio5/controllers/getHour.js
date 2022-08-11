
const getHour = (req, res, next) => {

  try{
    const hora = new Date().getHours()
      res.send({
        status: 'Ok',
        hour: hora
      });

  } catch (error) {
    next(error);
  }
}

module.exports = getHour;