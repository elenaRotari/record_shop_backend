import Product from "../modules/Product.js";
import { getAllSearched } from "../modules/Product.js";
export const getAll = async (req, res, next) => {
  try {
    if (req.query.search) {
      res.status(200).send(await getAllSearched(req.query.search));
    } else {
      res.status(200).send(await Product.find());
    }
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    res.status(200).send(await Product.findById(req.params.id));
  } catch (error) {
    next(error);
  }
};
export const postOne = async (req, res, next) => {
  try {
    res.status(201).send(
      await Product.create({
        ...req.body,
        picture: `${process.env.HOST}:${process.env.PORT}/api/products/${req.file.path}`,
      })
    );
  } catch (error) {
    next(error);
  }
};
export const updateOne = async (req, res, next) => {
  try {
    res
      .status(201)
      .send(await Product.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
};
export const deleteOne = async (req, res, next) => {
  try {
    res.status(200).send(await Product.findByIdAndDelete(req.params.id));
  } catch (error) {
    next(error);
  }
};
