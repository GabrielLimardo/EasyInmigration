const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;
const {
  validationResult
} = require("express-validator");
const bcrypt = require("bcryptjs");
const {Users} = require('../database/models');

const controller = {
  root: (req, res) => {
    const user = req.session.user;
    if (user) {
    db.Users.findByPk(req.session.user.id)
      .then(function (user) {
        req.session.user = user
        const currentUser = req.session.user;

        if (currentUser) {
          return res.render('perfil', {
            user: currentUser
          })
        } else {
          return res.render('login', {
            user: currentUser
          });
        }
      })
    } else {
      return res.render('login', {
        user
      });
    }
  },
  //tiene que cargar la nueva informacion a la base de datos
  edit: (req, res) => {
    const errors = validationResult(req);
    
      db.Users.update({
          username: req.body.username,
          email: req.body.email
        }, {
          where: {
            id: req.params.id
          }

        })
        .then(() => {
          db.Users.findByPk(req.params.id).then(function (user) {
            req.session.user = user
            return res.redirect(req.params.id + "")
          })
        })

  },
  


  controlarea: (req, res) => {
    const user = req.session.user;
    if (typeof user !== 'undefined' && user.rol === 1) {
      // Do the magic
      db.Users.findAll({
          include: {
            all: true,
            nested: true
          }
        })
        .then(function (results) {
          const UserAll = results;
          return res.render("paneldecontrol", {
            data: UserAll,
            user
          })
        })
        .catch(e => console.log(e))

    } else {
      return res.render('not-found', {
        user
      });
    }
  },
  //tengo que cargar la nueva informacion de roles
  updaterol: (req, res) => {
    db.Users.update({
        username: req.body.username,
        rol: req.body.rol
      }, {
        where: {
          username: req.body.username
        }
      })
      .then(() => {
        return res.redirect("/perfil/controlarea/")
      })

  },

  editpas: (req, res) => {
    const user = req.session.user;
    if (user) {
      return res.render('cambiarcontra', {
        user
      })
    } else {
      return res.render('not-found', {
        user
      });
    }
  },

  updatecontra: (req, res) => {
    let errors = validationResult(req);
    
      db.Users.findByPk(req.params.id)
        .then(function (user) {
          return db.Users.update({
            password: req.body.newPassword != "" ? bcrypt.hashSync(req.body.newPassword, 10) : user.password
          }, {
            where: {
              id: req.params.id
            }
          })


        })
        .then(() => {
          return res.redirect('/perfil/' + req.session.user.id);
        })
  },
  comentario: (req, res) => {
    const user = req.session.user;

    if (user) {
          db.Item.findAll(
            {
              where: {
                state: 0
              },
              include: [{association: "product"}],
              
            })
              .then((item) => {
                  return res.render('reseña', {
                      user,
                      item
                  });
              })
              .catch(e => console.log(e));
    } else {
      return res.render('not-found', {
        user
      });
    }

  },
  createComentario: (req, res) => {
    const user = req.session.user;
    if (user) {
      db.Comment.create({
        name: req.body.name,
        userId: req.session.user.id,
        productId: req.body.productId,
      })
      .then(() => {
        return res.redirect('/lista');
      })
    } else {
      return res.render('not-found', {
        user
      });
    }

  }

};

module.exports = controller;