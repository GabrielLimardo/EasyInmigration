const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {

	root: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("index", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	Idioma: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("Idioma", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	
	GastoAlimento: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("GastoAlimento", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	GastoTrasporte: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("GastoTrasporte", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	GastoVivienda: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("GastoVivienda", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	
	Industrias: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("Industrias", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	Desempleo: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("Desempleo", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	SalarioMinimo: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("SalarioMinimo", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	SalarioMedio: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("SalarioMedio", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	
	TipoDeVisado: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("TipoDeVisado", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	ServiciosPublicos: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("ServiciosPublicos", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	BajoClima: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("BajoClima", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	PromClima: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("PromClima", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	AltoClima: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("AltoClima", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	PBI: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("PBI", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	PBIperCapital: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("PBIperCapital", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	Inflacion: (req, res) => {
		const user = req.session.user;
	
		db.Countries.findAll()
		.then(function (Countries) {
		   res.render("Inflacion", {Countries: Countries, user})
		})
		.catch(e => console.log(e))
	},
	
	
};

module.exports = controller;