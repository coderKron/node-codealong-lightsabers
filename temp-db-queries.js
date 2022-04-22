const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/ironborn-ecommerce")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// const data = [
//   {
//     title: "Gun",
//     price: 9999,
//     tags: ["Guns"],
//   },
//   {
//     title: "Sluggo",
//     price: 5673,
//     tags: ["Sluggos"],
//   },
// ];

// Product.create(data)
//   .then((product) => console.log("a new product was created", product))
//   .catch((error) => console.log("error creating a product in DB", error));

// Product.findById("6261339659ddf4f9038ef8ff").then((response) => {
//   console.log(response);
// });

// Product.findByIdAndDelete("626135963fe00d30c1224f67").then((response) => {
//   console.log(response);
// });
