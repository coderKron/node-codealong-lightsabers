const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.model");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

// connect to db
mongoose
  .connect("mongodb://localhost/ironborn-ecommerce")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

//routes

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

app.get("/jedis", (req, res, next) => {
  Product.findOne({ title: "Jedi lightsaber" })
    .then((productDetails) => {
      res.render("products.hbs", productDetails);
    })
    .catch();
});

app.get("/siths", (req, res, next) => {
  res.render("products.hbs");
});

app.get("/guns", (req, res, next) => {
  res.render("products.hbs");
});

app.get("/sluggos", (req, res, next) => {
  res.render("products.hbs");
});

app.get("/products/:title", (req, res) => {
  res.send(req.params);
});

app.get("/search", (req, res, next) => {
  res.send(req.query);
  console.log(req.query);
});

app.listen(3000, () => {
  console.log("server listening to requests on port 3000");
});
