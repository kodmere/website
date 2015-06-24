var path = require("path");
var express = require("express");

function setUpStaticPages(app) {
	var staticDir = path.join(__dirname, "static");
	app.use(express.static(staticDir));
	
	app.get("/", serveIndex);
	app.get("/forside", serveIndex);
}

function serveIndex(req, res) {
	res.sendFile(path.join(__dirname, "static", "index.htm"));
}

module.exports = setUpStaticPages;
