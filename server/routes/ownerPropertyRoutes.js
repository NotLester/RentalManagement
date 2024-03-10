import express from "express";
const router = express.Router();
import {
  postRealEstate,
  getOwnerRealEstates,
  getSingleProperty,
  updatePropertyDetails,
  deleteProperty,
} from "../controllers/ownerPropertyController.js";
import upload from "../middleware/multerImageMiddleware.js";
import { cloudinaryMultipleUpload } from "../middleware/cloudinaryUpload.js";


router.post(
  "/",
  upload.array("realEstateImages", 10),
  cloudinaryMultipleUpload,
  postRealEstate
);
router.get("/", getOwnerRealEstates);
router.get("/:slug", getSingleProperty);
router.patch("/update/:slug", updatePropertyDetails);
router.delete("/delete/:slug", deleteProperty);

export default router;
