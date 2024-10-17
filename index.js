const express = require("express");
// Require path
const path = require("path");
// Include router
const pageRoutes = require("./router.js");

// Create express application
const app = express();

// Server address constants
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 3000;

// Set view
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
// Set path to public directory
app.use(express.static(path.join(__dirname,"public")));

// Set base path for page routing
app.use("/",pageRoutes);

app.listen(PORT,HOST,() => {
	console.log(`Listening at: http://${HOST}:${PORT}`);
});