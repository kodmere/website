var express = require("express");
var path = require("path");

var app = express();

var staticDir = path.join(__dirname, "static");
app.use(express.static(staticDir));

app.get("/", serveIndex);
app.get("/forside", serveIndex);

module.exports = app;

function serveIndex(req, res) {
	res.sendFile(path.join(__dirname, "static", "index.htm"));
}
