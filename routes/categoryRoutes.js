import express from "express";
import {
  addCategory,
  allCategory,
  deleteCat,
  updateCat,
} from "../controller/categoryController.js";

const categoryRoutes = express.Router();

categoryRoutes.post("/add", addCategory);
categoryRoutes.get("/", allCategory);
categoryRoutes.route("/:id").patch(updateCat).delete(deleteCat);

export default categoryRoutes;
