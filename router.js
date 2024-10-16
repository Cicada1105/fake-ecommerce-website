const express = require("express");
const Router = express.Router();
// Include pug templating engine
const pug = require("pug");


// The following data would be stored in a database
const teamMembers = [
	{
		id: 1,
		image: {
			src: "irene_moreno.jpeg",
			alt: "Irene Moreno Profile Picture"
		},
		name: "Irene Moreno",
		position: "Marketing Coordinator",
		email: "irene.moreno@example.com",
		phone: "011-227-3285",
		cell: "081-352-8705",
		interests: ["Organizing","Playing Tennis","Knitting"]
	},
	{
		id: 2,
		image: {
			src: "marius_garcia.jpeg",
			alt: "Marius Garcia Profile Picture"
		},
		name: "Marius Garcia",
		position: "Software Engineer",
		email: "marius.garcia@example.com",
		phone: "949-014-110",
		cell: "691-563-883",
		interests: ["Guitar","Astronomy"]
	},
	{
		id: 3,
		image: {
			src: "rosalyn_taylor.jpeg",
			alt: "Rosalyn Taylor Profile Picture"
		},
		name: "Rosalyn Taylor",
		position: "CEO",
		email: "rosalyn.taylor@example.com",
		phone: "018-8896-462",
		cell: "064-9147-934",
		interests: ["Quilting","Photography","Traveling","Writing"]
	}
]

Router.get("/",(req,res) => {
	const compiledFile = pug.compileFile("./views/home.pug");

	res.send(compiledFile({ title: "Home" }));
});
Router.get("/about",(req,res) => {
	const compiledFile = pug.compileFile("./views/about.pug");

	/*const basicTeamMembers = teamMembers.map(member => {
		let { id, image, name, position } = member;
		return { id, image, name, position }
	});*/
	res.send(compiledFile({ title: "About", teamMembers }));
});
Router.get("/profile/:id", (req,res) => {
	const compiledFile = pug.compileFile("./views/profile.pug");

	// Retrieve the user id from the url
	const id = req.params.id;
	// Retrieve team member associated with the respective id
	const teamMember = teamMembers[id - 1];

	res.send(compiledFile({ title: `${teamMember["name"]}'s Profile'}`, ...teamMember }));
});
Router.get("/contact",(req,res) => {
	const compiledFile = pug.compileFile("./views/contact.pug");

	res.send(compiledFile({ title: "Contact" }));
});

module.exports = Router;