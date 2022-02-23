import express from "express";
import { allSell, addSell } from "../controller/sellController.js";

const sellRoutes = express.Router();

sellRoutes.get("/", allSell);
sellRoutes.post("/add", addSell);
export default sellRoutes;
