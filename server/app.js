const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("Server 4000");
});

//Middleware

const middleware = (req, res, next) => {
  console.log("My middle")
  next()
};


app.get("/", (req, res) => {
  res.send("Hello World server");
});
app.get("/contact", (req, res) => {
  res.send("Hello World server contact");
});
app.get("/aboutus", middleware,(req, res) => {
  res.send("Hello World server about");
});
app.get("/signin", (req, res) => {
  res.send("Hello World server signin");
});
app.get("/signup", (req, res) => {
  res.send("Hello World server signup");
});
