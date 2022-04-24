const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/Product.model");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/products", (req, res, next) => {
  console.log(req.query.maxPrice);

  let filter;
  const max = req.query.maxPrice;

  if (max === undefined) {
    filter = {};
  } else {
    filter = { price: { $lte: max } };
  }

  Product.find(filter)
    .then((arrOfProducts) => {
      console.log(arrOfProducts);
      res.render("productList", { products: arrOfProducts });
    })
    .catch((error) => {
      console.log("error getting products from DB", error);
    });
});

app.get("/products/:productId", (req, res, next) => {
  Product.findById(req.params.productId)
    .then((productDetails) => {
      res.render("products.hbs", productDetails);
    })
    .catch((err) => {
      console.log("error getting from DB" + err);
    });
});

app.post("/products/new", (req, res, next) => {
  const newProducts = {
    title: req.body.title,
    price: req.body.price,
  };
  Product.create(newProducts)
    .then((newProducts) => {
      res.redirect("/products");
    })
    .catch((error) => {
      res.redirect("/");
    });
});

app.get("/search", (req, res, next) => {
  res.send(req.query);
  console.log(req.query);
});

app.listen(3000, () => {
  console.log("server listening to requests on port 3000");
});
