import express from "express";

const productsRouter = express.Router();

productsRouter.get("/products", (req, res) => {
  res.status(200).json([]);
});
export default productsRouter;
