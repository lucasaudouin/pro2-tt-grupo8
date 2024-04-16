const sneakers = require ("../db/data")

const productContoller ={
    product: function (req, res) {
        res.render("product")
    },
    cargarProducto: function (req, res) {
        res.render("product-add")
    }
}

module.exports = productContoller;