const {check, body} = require('express-validator');
const bcryptjs = require ('bcryptjs')
const db = require('../database/models');
const {Users} = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {

    registerValidator: [
        check('name')
        .notEmpty()
        .withMessage('Este campo no puede estar vacío'),

        body('email')
        .notEmpty()
        .withMessage('Debe ingresar un correo electrónico').bail()
        .isEmail()
        .withMessage('Debe ingresar un email válido')
        .custom (( value,{req}) => {
          return db.Users.findOne({ where: { email: value } })
          .then(function(user){
          if (user){
            return Promise.reject ('Usuario ya registrado')}
          })
        }), 
            // const user = users.findBySomething((user) => user.email === value);
          // return !user})
        // .withMessage ('Usuario ya registrado'),
        
    
        check('password')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .isLength( {min: 1} )
        .withMessage('La contraseña debe tener al menos 8 caracteres'),
    
        body("retype")
        .notEmpty()
        .withMessage("Campo obligatorio")
        .bail()
        .custom((value, { req }) => req.body.password === value)
        .withMessage("Las contraseñas deben coincidir"),
        
    ],

    login: [
        body("email")
          .notEmpty()
          .withMessage("Campo obligatorio")
          .bail()
          .custom((value, { req }) => { 
            return db.Users.findOne({ where: { email: value } })
            .then(function(user){
            // users.findBySomething((user) => user.email == value);
            if (user) {
              if (!bcryptjs.compareSync(req.body.password, user.password)){
                return Promise.reject ('Usuario o Contraseña Invalidos')}
               
            }
            else {
              return Promise.reject ('Usuario o Contraseña Invalidos')
            } 
          })
        }),
          // .withMessage("Email o contraseña inválidos"),
        body("password").notEmpty().withMessage("Campo obligatorio"),
      ],

}