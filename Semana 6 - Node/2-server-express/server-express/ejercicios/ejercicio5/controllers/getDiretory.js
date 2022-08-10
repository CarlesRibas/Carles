const getDirectory = (req, res, next) => {

  try{
    const directorio = (__dirname)
      res.send({
        status: 'Ok',
        directorio: directorio
      });

  } catch (error) {
    next(error);
  }
}

module.exports = getDirectory;