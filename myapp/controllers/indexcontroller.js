const zapas = require('../db/data')
 
const indexController = {
    index: function (req, res) {
        const nombresProductos = zapas.productos.map(producto => producto.nombre);
        res.render("index", { productos: nombresProductos });
    }
}

module.exports = indexController