const bycrypt = require("bcryptjs");
const crypto = require("crypto");
const { validationResult } = require("express-validator");
const jsonModel = require('../models/jsonModel');
const cartModel = jsonModel('cart');
const CountriesModel = jsonModel('Countries');
const {
  User,
  Countries,
  Item,
  sequelize,
} = require("../database/models");


const carritoController = {
    cart(req, res) {
      const user = req.session.user;
        Item.findAll({
          where: {
            userId: req.session.user.id,
            state: 1,
          },
          include: ['Countries'],
        }).then((items) => {
          return res.render("cart", { items, user })
        });
      },
    
      addToLike(req, res) {
        // const errors = validationResult(req);
    
        // if (errors.isEmpty()) {
          // Busco el Countries que voy a agregar como Item.
          Countries.findByPk(req.body.CountriesId, {  
          })
            .then((countries) => {
              // Creo el Item de compra
              return Item.create({
                userId: req.session.user.id,
                state: 1,
                CountriesId: countries.id,
                quantity:1
              });
            })
            .then((item) => res.redirect("/carrito"))
            .catch((e) => console.log(e));
        // } else {
        //   Countries.findByPk(req.body.CountriesId, {  })
        //      .then(Countries => {
        //         return res.redirect('/lista/detail', {Countries, errors: errors.mapped()})
        //      })
          
      },
      
      deleteFromCart(req, res) {
        Item.destroy({
          where: {
            id: req.body.itemId,
          },
          force: true,
        })
          .then((response) => res.redirect("/carrito"))
          .catch((e) => console.log(e));
      },
      deleteallFromCart(req, res) {
        Item.destroy({
          where: {
            state: 1,
          },
          force: true,
        })
          .then((response) => res.redirect("/carrito"))
          .catch((e) => console.log(e));
      },
    
    
  

}

module.exports = carritoController;