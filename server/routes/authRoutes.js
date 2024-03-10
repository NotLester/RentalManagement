import express from "express";
const router = express.Router();
import {
  login,
  register,
  refreshOwner,
  refreshTenant,
  logout,
  forgotPassword,
  resetPassword,
  verifyAccount,
  resendVerificationEmail,
} from "../controllers/authController.js";
import upload from "../middleware/multerImageMiddleware.js";
import { cloudinaryProfileImageUpload } from "../middleware/cloudinaryUpload.js";
import { apiLimiter } from "../middleware/rateLimiter.js";


router.get("/owner/refresh", refreshOwner);
router.get("/tenant/refresh", refreshTenant);
router.post("/login", apiLimiter, login);
router.post(
  "/register",
  apiLimiter,
  upload.single("profileImage"),
  cloudinaryProfileImageUpload,
  register
);
router.post("/verify-account", verifyAccount);
router.patch("/resend-verification-email", resendVerificationEmail);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password", resetPassword);
router.post("/logout", logout);

export default router;
