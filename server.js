const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 3000);

app.get("/*", (req, res) => {
  console.log(path.join(__dirname + "/src/index.html"));

  res.sendFile(path.join(__dirname + "/src/index.html"));
});

console.log(`Port listening to ${process.env.PORT}`);
