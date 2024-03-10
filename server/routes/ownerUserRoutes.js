import express from "express";
const router = express.Router();
import {
  getSingleTenantUser,
  getSelfDetail,
  updateProfile,
  addContactToggle,
  getAllContacts,
} from "../controllers/ownerUserControllers.js";


router.get("/tenant-user/:slug", getSingleTenantUser); // Only the tenant user can access this route
router.get("/profile", getSelfDetail);
router.patch("/profile", updateProfile);
router.patch("/addContact/:id", addContactToggle);
router.get("/contacts/all", getAllContacts);

export default router;
