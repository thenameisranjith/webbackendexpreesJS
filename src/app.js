const express = require("express");
const app = express();
portNumber = 3000;

app.get("", (req, res) => {
  res.send("Hello World welcome");
});
app.get("/about", (req, res) => {
  res.send("welcome About Page");
});
app.get("/temp", (req, res) => {
  res.send("welcome Temp Page");
});
app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(portNumber, () => {
  console.log(portNumber);
});
