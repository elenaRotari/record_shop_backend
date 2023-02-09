import express from "express";

const productsRouter = express.Router();

productsRouter.get("/products", (req, res, next) => {
  try {
    res.status(200).json("");
  } catch (error) {
    next(error);
  }
});
export default productsRouter;
