import express from "express";
const router = express.Router();
import {
  createRentDetail,
  getAllRentDetailsOwnerView,
  getSingleRentDetailsOwnerView,
  createPaymentHistory,
  getAllPaymentHistory,
} from "../controllers/rentDetailOwnerControllers.js";


router.post("/createDetail", createRentDetail);
router.get("/allRentDetails", getAllRentDetailsOwnerView);
router.get("/:rentDetailId", getSingleRentDetailsOwnerView);
router.post("/createPaymentHistory", createPaymentHistory);
router.get("/allPaymentHistory/:rentDetailId", getAllPaymentHistory);

export default router;
