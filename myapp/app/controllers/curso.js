var models = require('../models/index');
var Curso = models.curso;
//var Curso = models.curso;

const index = async function (req, res) {
    //res.end("página index");
    const cursos = await Curso.findAll();
    res.render('curso/index', {
        cursos: cursos,
    });
};
const create = async function (req, res) {
    if (req.route.methods.get) {
        res.render('curso/create');
    } else {
        try {
            curso = await Curso.create({
                sigla: req.body.sigla,
                nome: req.body.nome,
                descricao: req.body.descricao,
                id_area: req.body.area,
            });
        } catch (e) {
            console.log(e);
        }
        res.redirect('/curso');
    }
    //res.redirect('/curso');
};

const read = async function (req, res) {
    var cursoId = req.param('id');
    res.end(cursoId);/*  */
};
const update = async function (req, res) {
    // var curso = await Curso.findByPk(req.params.id);

    // if (req.route.methods.get) {
    //     res.render("curso/update", {
    //         curso:curso
    //     });
    // } else {
    //     try {
    //         //await Curso.destroy({where: {id: req}})

    //     }

    // }
};
const remove = async function (req, res) {
    const curso = await Curso.findByPk(req.params.id);

    if (req.route.methods.get) {
        res.render("curso/remove", {
            curso: curso
        });
    } else {
        // try {
        //     //await Curso.destroy({where: {id: req}})

        // } catch {}

    }

};

module.exports = { index, read, create, update, remove }