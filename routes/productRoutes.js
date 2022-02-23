import express from "express";
import { addProduct, allProduct } from "../controller/productController.js";
const productRoutes = express.Router();

productRoutes.get("/", allProduct);
productRoutes.post("/add", addProduct);

export default productRoutes;
