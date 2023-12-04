const express = require('express');
const app = express();
const PORT = 3000;

app.put('/example', (req, res) => {
	res.send("PUT Request Called")
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
