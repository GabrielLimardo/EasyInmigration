const json = require ('../custom-module/custom-json')
const users = json('users')

module.exports = (req, res, next) => {
  
  res.locals.user = false;

  if(req.session.user){
    res.locals.user = req.session.user;
    return next();
  } else if(req.cookies.email) {
    // Buscamos al usuario
    Users.findOne({ where: { email: req.body.email } })
    .then(function(user){ 

    // LO LOGUEO

    // Sacamos los datos sensibles
    delete user.password;

    // Lo guardamos en sesion
    req.session.user = user;

    // Mandamos datos a la vista
    res.locals.user = user;

    // Continuamos
    return next();
  })} else {
    return next();
  }
}