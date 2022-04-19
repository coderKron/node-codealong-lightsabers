const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/about", (req, res, next) => {
  console.log("A request on the ABOUT page was received...");

  res.sendFile(__dirname + "/views/about.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3001, () => {
  console.log("server listening to requests on port 3000");
});
