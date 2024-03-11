import express from "express";
import {
  forgotPassword,
  login,
  logout,
  refreshOwner,
  refreshTenant,
  register,
  resendVerificationEmail,
  resetPassword,
  verifyAccount,
} from "../controllers/authController.js";
import { cloudinaryProfileImageUpload } from "../middleware/cloudinaryUpload.js";
import upload from "../middleware/multerImageMiddleware.js";
import { apiLimiter } from "../middleware/rateLimiter.js";
const router = express.Router();


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
