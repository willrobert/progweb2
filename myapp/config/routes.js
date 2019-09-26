const express = require('express');
const mainController = require("../app/controllers/main");
const cursoController = require("../app/controllers/curso");
const router = express.Router();

// router.get('/', function(req, res) {
//  res.send('Página principal do site');
// });
// router.get('/sobre', function(req, res) {
//  res.send('Página sobre');
// });

// Controlador Main
router.get("/", mainController.index);
router.get("/sobre", mainController.sobre);
router.get("/ui", mainController.sobre);

//Controlador curso
router.get('/curso', cursoController.index);
router.get('/curso/create', cursoController.create);
router.post('/curso/create', cursoController.create);
router.get('/curso/read/:id', cursoController.read);
router.get('/curso/update/:id', cursoController.update);
router.post('/curso/update/:id', cursoController.update);
router.post('/curso/remove/:id', cursoController.remove);


module.exports = router;