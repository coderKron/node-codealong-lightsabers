const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/about", (req, res, next) => {
  console.log("A request on the ABOUT page was received...");

  res.sendFile(__dirname + "/views/about.html");
});

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.get("/jedis", (req, res, next) => {
  // res.sendFile(__dirname + "/views/jedi-lightsabers.html");

  const data = {
    title: "Jedi Lightsabers",
    price: 12999,
    imageFile: "jedi-lightsaber.webp",
    text: "We create the lightsabers in house. The Jedi lightsabers can come in whatever color you want except for red. Don't think your master will like that!",
    stores: ["Galaxy far far away", "Alabama", "tatooine"],
  };

  res.render("products.hbs", data);
});

app.get("/siths", (req, res, next) => {
  const data = {
    title: "Sith Lightsabers",
    price: 29999,
    imageFile: "sith-lightsaber.jpeg",
    text: "We create the lightsabers in house. The Sith lightsabers can come in red. The high price is because for tricking the jedi that we're not creating sith lightsabers. If you're a jedi reading this. This is a joke ofcourse.",
  };

  res.render("products.hbs", data);
});

app.get("/guns", (req, res, next) => {
  const data = {
    title: "Guns",
    price: "10000 - 19999",
    imageFile: "guns.webp",
    text: "Guns go pew pew pew",
  };
  res.render("products.hbs", data);
});

app.get("/sluggos", (req, res, next) => {
  // res.sendFile(__dirname + "/views/jedi-lightsabers.html");

  const data = {
    title: "Giant talking sluggos",
    price: 950.0,
    imageFile: "sluggos.webp",
    text: "buy sluggos",
  };

  res.render("products.hbs", data);
});

app.listen(3001, () => {
  console.log("server listening to requests on port 3000");
});
