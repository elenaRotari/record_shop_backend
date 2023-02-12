import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controllers/productController.js";

import multer from "multer";

import validate from "../middleware/validate.js";
import { getSchemaProducts, postSchemaProducts } from "./products.schema.js";

const upload = multer({ dest: "uploads" });

const productsRouter = express.Router();

productsRouter
  .route("/products")
  .get(validate(getSchemaProducts), getAll)
  .post(upload.single("picture"), validate(postSchemaProducts), postOne);

productsRouter.route("/:id").get(getOne).put(updateOne).delete(deleteOne);
export default productsRouter;
