import express from "express";
const router = express.Router();
import {
  getSingleRentDetailsTenantView,
  getAllPaymentHistory,
} from "../controllers/rentDetailTenantControllers.js";


router.get("/:realEstateId", getSingleRentDetailsTenantView);
router.get("/allPaymentHistory/:rentDetailId", getAllPaymentHistory);
export default router;
