const zapatillas = require('../db/data')
const zapas = require("../db/data")

const perfilContoller = {
    profile: function (req, res) {
        let nombreZapa = [];
        let descripcionZapa = [];
        let comentarios = [];
        let imagenes = [];
        let id = [];
        for (let i = 0; i < zapatillas.productos.length; i++) {
            nombreZapa.push(zapatillas.productos[i].nombre);
            descripcionZapa.push(zapatillas.productos[i].descripcion);
            comentarios.push(zapatillas.productos[i].comentarios);
            imagenes.push(zapatillas.productos[i].imagen);
            id.push(zapatillas.productos[i].id);
        }
        res.render("profile", {
            title: nombreZapa,
            descripcion: descripcionZapa,
            comentarios: comentarios,
            imagen: imagenes,
            id: id
        });
    },
    edit: function(req, res) {
        res.render("profile-edit");
    }
};

module.exports = perfilContoller;





module.exports = perfilContoller;