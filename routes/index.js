// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.root); 
router.get('/Idioma', IndexController.Idioma);
router.get('/GastoAlimento', IndexController.GastoAlimento);
router.get('/GastoTrasporte', IndexController.GastoTrasporte);
router.get('/GastoVivienda', IndexController.GastoVivienda);
router.get('/Industrias', IndexController.Industrias);
router.get('/Desempleo', IndexController.Desempleo);
router.get('/SalarioMinimo', IndexController.SalarioMinimo);
router.get('/SalarioMedio', IndexController.SalarioMedio);
router.get('/TipoDeVisado', IndexController.TipoDeVisado);
router.get('/ServiciosPublicos', IndexController.ServiciosPublicos);

router.get('/BajoClima', IndexController.BajoClima);
router.get('/PromClima', IndexController.PromClima);
router.get('/AltoClima', IndexController.AltoClima);

router.get('/PBI', IndexController.PBI);
router.get('/PBIperCapital', IndexController.PBIperCapital);
router.get('/Inflacion', IndexController.Inflacion);



module.exports = router;
