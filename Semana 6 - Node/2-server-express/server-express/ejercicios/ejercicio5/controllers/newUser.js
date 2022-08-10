const newUser = (req, res, next) => {

  try{
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error ('Faltan campos obligatorios');
      error.httpStatus = 400;
      throw error;
    };

    res.send({
      status: 'Ok',
      email: email,
      password: password,
    });

  } catch (error) {
    next(error);
  }
}

module.exports = newUser;