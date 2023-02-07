import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  picture: String,
  price: Number,
});
