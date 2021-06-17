const fs = require ('fs');
const path = require ('path');
// const { json } = require('express');
// const { delete } = require('../routes/homeRoutes');
const {validationResult} = require('express-validator')
const json = require ('../custom-module/custom-json')
const users = json('users')
const db = require('../database/models');
const {Users} = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {
    index: (req, res) => {

        return res.render('login')
    },
  login: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      Users.findOne({ where: { email: req.body.email } })
        .then(function (user) {
          // users.findBySomething(user => user.email == req.body.email);
          // console.log(user)
          delete user.dataValues.password;
          
          // user = {
          //   ...user.dataValues,
          //   cart: 5
          // }

          
          req.session.user = user; // YA ESTÁ EN SESION
          
          if (req.body.remember) {
            // Creo la cookie
            res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 * 24 });

          }
          return Promise.resolve(user); 
        }).then(() => {return res.redirect('/');})
    } else {
      return res.render('login', { errors: errors.mapped(), old: req.body });
    }
  },
    logout: function(req, res) {
        // Desloguear al usuario
    
        req.session.destroy();
    
        if(req.cookies.email){
          res.clearCookie('email');
        }
    
        return res.redirect('/')
    }
}
