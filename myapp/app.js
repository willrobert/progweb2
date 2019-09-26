
// app.use('/img', [
//  express.static(__dirname + '/public/img')
// ]);
// app.use(function(req, res) {
//  res.end("Acesse o arquivo /img/codebench.jpg");
// });

const express = require("express");
const router = require("./config/routes");
const app = express();
app.use(router);

app.use(express.urlencoded({extended: false}));
app.use(logger('common'))
app.use(routes)

app.listen(3000, function() {
 console.log("Express app iniciada na porta 3000.");
});

   







