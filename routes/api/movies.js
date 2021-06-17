const express = require("express")
const router = express.Router();
const moviesAPIController = require("../../controllers/api/moviesController")

router.get("/", moviesAPIController.list)
module.exports= router;