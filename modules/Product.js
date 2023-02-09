import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: String,
    artist: String,
    year: Number,
    picture: String,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productsSchema);
