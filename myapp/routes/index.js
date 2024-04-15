var express = require('express');
var router = express.Router();

const indexcontroller = require("../controllers/indexcontroller");


router.get("/", indexcontroller.index);

router.get("/search-results", indexcontroller.search-results);

module.exports = router;
