import express from "express";

const accountRoutes = express.Router();
accountRoutes.get("/");
accountRoutes.post("/deposit");

export default accountRoutes;
