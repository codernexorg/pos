import express from "express";
import { getCustomer, addCustomer } from "../controller/customerController.js";

const customerRoutes = express.Router();

customerRoutes.get("/", getCustomer);
customerRoutes.post("/add", addCustomer);
export default customerRoutes;
