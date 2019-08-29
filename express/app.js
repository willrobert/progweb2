// var express = require("express");
// var app = express();
// var logger = require("morgan");

// app.use(logger("tiny"));
// app.use(function(req, res) {
//  res.end("Hello, world!");
// });
// app.listen(3000);

const express = require("express");
const app = express();
var logger = require("morgan");

app.use(logger("short"));
app.use(function(req, res) {
 res.end("Hello, world!");
});
app.listen(3000, function() {
 console.log("Express app iniciada na porta 3000.");
});