var express = require("express");
var path = require("path");

var app = express();

var staticDir = path.join(__dirname, "static");
app.use(express.static(staticDir));

module.exports = app;
