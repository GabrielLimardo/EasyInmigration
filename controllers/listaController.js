let db = require("../database/models");
const {
    promiseImpl
} = require("ejs");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    detail: (req, res) => {
        const user = req.session.user;
        db.Countries.findByPk(req.params.productId)
            .then(Countries => {
                        // return res.send(comentarios);
                        return res.render("detail", {
                            Countries,
                            user
                        
                    });      
                }).catch(e => console.log(e));
           
    },
    create: (req, res) => { //te llava a la pagina de creacion
        const user = req.session.user;
        if (typeof user !== 'undefined' && user.rol === 1) {

            return res.render('product-create-form',{user})

        } else {
            return res.render('not-found', {
                user
            });
        }
    },

    store: (req, res, next) => {
        db.Product.create({
                name: req.body.name,
                Idioma: req.body.Idioma,
                GastoAlimento: req.body.GastoAlimento,
                GastoTrasporte: req.body.GastoTrasporte,
                GastoVivienda: req.body.GastoVivienda,
                Desempleo: req.body.Desempleo,
                SalarioMinimo: req.body.SalarioMinimo,
                SalarioMedio: req.body.SalarioMedio,
                TipoDeVisado: req.body.TipoDeVisado,
                ServiciosPublicos: req.body.ServiciosPublicos,
                PromClima: req.body.PromClima,
                AltoClima: req.body.AltoClima,
                BajoClima: req.body.BajoClima,
                PBI: req.body.PBI,
                PBIperCapital: req.file.PBIperCapital,
                Inflacion: req.file.Inflacion
            })
            .then(() => {
                return res.redirect('/');
            })
    },
    edit: (req, res) => {
        const user = req.session.user;
        if (typeof user !== 'undefined' && user.rol === 1) {
                            return db.Countries.findByPk(req.params.id)
                                .then(function (Countries) {
                                    return res.render("product-edit-form", {
                                        Countries: Countries,
                                        user,
                                    });
                                });
        } else {
            return res.render('not-found', {
                user
            });
        }
    },
    update: (req, res) => { //lo actualiza

        db.Countries.update({
                name: req.body.name,
                Idioma: req.body.Idioma,
                GastoAlimento: req.body.GastoAlimento,
                GastoTrasporte: req.body.GastoTrasporte,
                GastoVivienda: req.body.GastoVivienda,
                Desempleo: req.body.Desempleo,
                SalarioMinimo: req.body.SalarioMinimo,
                SalarioMedio: req.body.SalarioMedio,
                TipoDeVisado: req.body.TipoDeVisado,
                ServiciosPublicos: req.body.ServiciosPublicos,
                PromClima: req.body.PromClima,
                AltoClima: req.body.AltoClima,
                BajoClima: req.body.BajoClima,
                PBI: req.body.PBI,
                PBIperCapital: req.file.PBIperCapital,
                Inflacion: req.file.Inflacion
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/lista/detail/" + req.params.id)
    },
    destroy: (req, res) => {
        db.Countries.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/lista");
    },

};

module.exports = listaController;