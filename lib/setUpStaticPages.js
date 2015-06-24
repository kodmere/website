var path = require("path");
var express = require("express");

var staticDir = path.join(__dirname, "static");

function setUpStaticPages(app) {
	app.use(express.static(staticDir));
	
	app.get("/", serveIndex);
	app.get("/forside", serveIndex);
}

function serveIndex(req, res) {
	res.sendFile(path.join(staticDir, "index.htm"));
}

module.exports = setUpStaticPages;
