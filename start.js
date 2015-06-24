var http = require("http");
var app = require("./lib/app.js");
var yargs = require("yargs");

var args = yargs.default("port", 80).argv;

http.createServer(app).listen(args.port);
