var express = require("express");
var setUpStaticPages = require("./setUpStaticPages.js");

var app = express();

setUpStaticPages(app);

module.exports = app;
