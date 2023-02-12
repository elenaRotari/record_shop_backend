import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controllers/productController.js";
import multer from "multer";

const upload = multer({ dest: "uploads" });

const productsRouter = express.Router();

productsRouter
  .route("/products")
  .get(getAll)
  .post(upload.single("picture"), postOne);

productsRouter.route("/:id").get(getOne).put(updateOne).delete(deleteOne);
export default productsRouter;
