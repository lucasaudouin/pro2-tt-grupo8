const sneakers = require ("../db/data")

const productContoller ={
    product: function (req, res) {
        res.render("product")
    }
}

module.exports = productContoller;