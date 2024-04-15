const zapas = require("../db/data")

const perfilContoller ={
    profile: function (req, res) {
        res.render("profile")
    }
}

module.exports = perfilContoller;