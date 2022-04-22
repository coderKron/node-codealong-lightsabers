const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    min: 1,
  },
  hasStock: {
    type: Boolean,
    default: true,
  },
  categories: {
    type: [String],
    enum: ["Guns", "Lightsabers", "Ships", "Sluggos"],
  },
  imgSrc: {
    type: String,
    default: "https://via.placeholder.com/700x400",
  },
  stores: {
    type: String,
    enum: ["galaxy far far away", "tatooine", "alabama"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
