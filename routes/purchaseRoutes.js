import express from "express";
import { addPurchase, allPurchase } from "../controller/purchaseController.js";
const purchaseRoutes = express.Router();

purchaseRoutes.post("/add", addPurchase);
purchaseRoutes.get("/", allPurchase);

export default purchaseRoutes;
