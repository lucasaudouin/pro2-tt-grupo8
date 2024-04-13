var express = require('express');
var router = express.Router();

const productocontroller = require("../controllers/productocontroller")

router.get("/add", productocontroller.productocontroller)