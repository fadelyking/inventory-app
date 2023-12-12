const express = require("express");
const router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res) {
	res.render("form");
});

router.post("/new", function (req, res) {
	console.log(req.body.text);
	const messageUser = req.body.user;
	const messageText = req.body.text;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect("/");
});

module.exports = router;
