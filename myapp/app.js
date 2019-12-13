const express = require("express");
const router = require("./config/routes");
const logger = require("morgan");
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(router);
app.use(logger("common"));

// handlebasr
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
    helpers: require(__dirname + '/app/views/helpers/helpers.js'),
    layoutsDir: __dirname + '/app/views/layouts',
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

// Sass
const sass = require('node-sass-middleware');
app.use(sass({
    src: __dirname + '/public/scss',
    dest: __dirname + '/public/css',
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

// Bootstrap
app.use('/js', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/popper.js/dist/umd/'),
    express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
    express.static(__dirname + '/public/js')
   ]);

app.use('/img', [
    express.static(__dirname + '/public/img')
]);

app.listen(3000, function () {
    console.log("Express app iniciada na porta 3000.");
});