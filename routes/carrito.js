const express = require("express")
const router = express.Router();
const carritoController = require("../controllers/carritoController")

const validator = require('../middlewares/validator1');
const authMiddleware = require('../middlewares/auth1');

// router.get("/", carritoController.index);

//faltan los middleware
router.get('/',authMiddleware, carritoController.cart);
router.post('/addToLike',authMiddleware,validator.addToCart, carritoController.addToLike);
router.post('/deleteFromCart',authMiddleware, carritoController.deleteFromCart);
router.post('/deleteallFromCart',authMiddleware, carritoController.deleteallFromCart);



module.exports = router;