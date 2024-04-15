var express = require('express');
var router = express.Router();
const controllerindex = require("../controllers/indexcontroller")

router.get("/", controllerindex.indexPagina);



module.exports = router;
