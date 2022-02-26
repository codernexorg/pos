import express from "express";
import {
  purchaseReport,
  sellReport,
  stockReport,
} from "../controller/reportController.js";

const reportRoutes = express.Router();

reportRoutes.get("/purchase", purchaseReport);
reportRoutes.get("/sell", sellReport);
reportRoutes.get("/stock", stockReport);

export default reportRoutes;
