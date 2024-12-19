const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
	const { name, email } = req.body;
	console.log(`Received form submission: Name - ${name}, Email - ${email}`);
	res.status(200).send("Form submitted successfully!");
});


app.listen(port, () => {
	console.log(`Server is running at PORT ${port}`);
});
