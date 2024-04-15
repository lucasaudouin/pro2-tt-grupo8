var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexcontroller")

router.get("/", indexController.indexPagina);



module.exports = router;
