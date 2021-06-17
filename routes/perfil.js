const express= require("express")
const router = express.Router();
const perfilController = require("../controllers/perfilController")
const validator = require('../middlewares/validator1');

router.get("/controlarea", perfilController.controlarea);
router.post("/updaterol", perfilController.updaterol);
router.get("/editpas/:id", perfilController.editpas);
router.post("/editpas/:id",validator.password, perfilController.updatecontra);
router.get("/comentario", perfilController.comentario);
router.post("/resenaupdate",perfilController.createComentario);
router.post("/datos", perfilController.datos);
router.get("/:id", perfilController.root);
router.post("/:id",validator.profile, perfilController.edit);
router.get("", perfilController.root);




module.exports = router;
