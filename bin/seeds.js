const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/ironborn-ecommerce")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

const data = [
  {
    title: "Bakka",
    price: 5673,
    tags: ["Sluggos"],
  },
  {
    title: "Milenium Falcon",
    price: 25000000,
    hasStock: true,
    categories: ["Ships"],
  },
  {
    title: "Crossbow",
    price: 32000,
    hasStock: true,
    categories: ["Guns"],
  },
];

Product.insertMany(data)
  .then((response) => {
    console.log(`${response.length} created`);
    console.log(response);
  })
  .catch((err) => {
    console.log("Error creating data");
    console.log(err);
  });

Product.findOneAndUpdate(
  ({ title: "Jedi lightsaber" },
  { imgSrc: "../public/images/jedi-lightsaber.webp" })
).then(() => {
  mongoose.connection.close();
});
