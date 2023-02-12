import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: String,
    artist: String,
    year: Number,
    price: Number,
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
