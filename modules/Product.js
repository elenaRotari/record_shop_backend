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

const Product = mongoose.model("Product", productSchema);

export const getAllSearched = async (search) => {
  console.log(search);

  const results = await Product.find({
    $or: [
      {
        title: {
          $regex: ".*" + search + ".*",
        },
      },
      {
        artist: {
          $regex: ".*" + search + ".*",
        },
      },
    ],
  });
  console.log(results);

  return results;
};
export default Product;
