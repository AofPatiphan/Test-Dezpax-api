import { Product } from "../types/product";
import { Request, Response, NextFunction } from "express";
const data = require("../data/products.json");

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: Product[] = data;
    res.status(200).json({ data: response });
  } catch (err) {
    next(err);
  }
};

const getProductBySky = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = data.find((e: Product) => e.sku === req.params.sku);
    res.status(200).json({ data: response });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProduct,
  getProductBySky,
};
