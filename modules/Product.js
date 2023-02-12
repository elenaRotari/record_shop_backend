import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export const getAllSearched = async (search) => {
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

  return results;
};
export default Product;
