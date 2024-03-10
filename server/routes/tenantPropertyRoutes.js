import express from "express";
const router = express.Router();
import {
  getAllProperties,
  getSingleProperty,
  savePropertyToggle,
  getAllSavedProperties,
} from "../controllers/tenantPropertyControllers.js";


router.get("/", getAllProperties);
router.get("/:slug", getSingleProperty);
router.patch("/save/:id", savePropertyToggle);
router.get("/saved/all", getAllSavedProperties);

export default router;
