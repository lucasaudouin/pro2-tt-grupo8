const zapas = require ("../db/data")

const perfilPagina ={
    index: function (req, res) {
        res.send(zapas.productos)
    }
}

module.exports = perfilPagina