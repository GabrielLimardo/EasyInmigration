const { promiseImpl, render } = require("ejs");
const db = require("../../database/models");
const sequelize = db.sequelize;

const moviesController = {
   
    list: (req, res) => {
        db.Peliculas.findAll({
            include: [{association: "generos"},{association:"actores"}]
        })

            .then(function (peliculas) {
                let respuestas = {
                    meta: {
                        status:200,
                        total: peliculas.length
                    },
                    data: peliculas
                };
                res.send(respuestas)
            })
            .catch(e => console.log(e))
    }
}

module.exports = moviesController;