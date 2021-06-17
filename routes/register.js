const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController')

const validator = require('../middlewares/validator');



router.get ('/login', loginController.index);
router.post('/login', validator.login, loginController.login);
router.get ('/', registerController.index)
router.post('/lod', validator.registerValidator, registerController.registro);
router.post('/logout', loginController.logout);

module.exports = router;