import express from "express";
import { dueCollection, getAllDue } from "../controller/dueController.js";

const dueRoutes = express.Router();
dueRoutes.get("/", getAllDue);
dueRoutes.post("/collect", dueCollection);

export default dueRoutes;
