import express from "express";
import { allSupplier, addSupplier } from "../controller/supplierController.js";

const supplierRoutes = express.Router();
supplierRoutes.get("/", allSupplier);
supplierRoutes.post("/add", addSupplier);

export default supplierRoutes;
