const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("This is home");
});
app.get("/about", (req, res) => {
  res.send("This is about");
});
app.get("/contact", (req, res) => {
  res.send("This is contact");
});
app.get("/about/author", (req, res) => {
  res.send("This is author");
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
