const express = require("express");
const app = express();

console.log(app)

app.get("/", function(req, res) {
  res.send("Kill Coronovairus!");
});

const port = 3000;
app.listen(port, function() {
  console.log(`Hello world app listening on port ${port}!`);
});


// npm install -g npm-check
