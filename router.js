const express = require("express");
const Router = express.Router();
// Include pug templating engine
const pug = require("pug");

Router.get("/",(req,res) => {
	const compiledFile = pug.compileFile("./views/home.pug");

	res.send(compiledFile({ title: "Home" }));
});
Router.get("/about",(req,res) => {
	const compiledFile = pug.compileFile("./views/about.pug");

	res.send(compiledFile({ title: "About" }));
});
Router.get("/contact",(req,res) => {
	const compiledFile = pug.compileFile("./views/contact.pug");

	res.send(compiledFile({ title: "Contact" }));
});

module.exports = Router;