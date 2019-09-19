var express = require("express");
var app = express();
// app.use('/img', [
//  express.static(__dirname + '/public/img')
// ]);
// app.use(function(req, res) {
//  res.end("Acesse o arquivo /img/codebench.jpg");
// });

app.get("/", function(req, res) {
    res.end("Bem-vindo ao meu site!");
   });
   app.get("/sobre", function(req, res) {
    res.end("Bem-vindo à página sobre!");
   });
   app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!");
   });

app.listen(3000, function() {
    console.log("Express app iniciada na porta 3000.");
});

// [TODO] from class]
app.use('/js', [
	express.static(__dirname + '/public/js'),
	express.static(__dirname + '/node_modules/jquery/dist'),
	express.static(__dirname + '/node_modules/popper.js/dist'),
	express.static(__dirname + '')
])




   







