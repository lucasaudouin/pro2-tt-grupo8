const sneakers = require ("../db")

const indexController = {
    index: function(req, res){
        res.send(sneakers.index)
    }
}

module.exports = indexController;

 
