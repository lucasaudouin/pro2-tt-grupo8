const zapas = require('../db/data')
 
const indexController ={
    index: function (req, res) {
        res.send(zapas.productos)
    }
}

module.exports = indexController