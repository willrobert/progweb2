var models = require('../models/index');
var Curso = models.curso;

const models = require("../models/index");
const Curso = models.curso;

const index = async function (req, res) {
    //res.end("página index");
    const curso = await Curso.findAll();
    res.render('curso/index', {
        cursos:cursos
    })
};
const create = async function (req, res) {
    if (req.route.methods.get) {
        res.render('curso/cretae');
    } else {
        console.log(req.body);
        try {
            await Curso.create(req.body);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/curso");
    }
};
const read = async function (req, res) {};
const update = async function (req, res) {};
const remove = async function (req, res) {};

module.exports = { index, read, create, update, remove }