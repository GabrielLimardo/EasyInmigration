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
            // Do the magic
            db.Category.findAll()
                .then((categories) => {
                    db.Brand.findAll()
                        .then((brands) => {
                            return res.render('product-create-form', {
                                user,
                                categories,
                                brands
                            });
                        })
                        .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
        } else {
            return res.render('not-found', {
                user
            });
        }
    },

    store: (req, res, next) => {
        db.Product.create({
                name: req.body.name,
                descripcion: req.body.descripcion,
                categoryId: req.body.categoryId,
                brandId: req.body.brandId,
                image: req.file.filename
            })
            .then(() => {
                return res.redirect('/');
            })
    },
    edit: (req, res) => {
        const user = req.session.user;
        if (typeof user !== 'undefined' && user.rol === 1) {
            db.Category.findAll()
                .then((categories) => {
                    db.Brand.findAll()
                        .then((brands) => {
                            return db.Product.findByPk(req.params.id)
                                .then(function (product) {
                                    return res.render("product-edit-form", {
                                        product: product,
                                        user,
                                        categories,
                                        brands
                                    });
                                });
                        })
                        .catch(e => console.log(e));

                })


        } else {
            return res.render('not-found', {
                user
            });
        }
    },
    update: (req, res) => { //lo actualiza

        db.Countries.update({
            name: req.body.name,
            descripcion: req.body.descripcion,
            category: req.body.categoryId,
            brandId: req.body.brandId,
            image: req.body.image
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