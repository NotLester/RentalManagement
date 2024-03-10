import express from "express";
import {
	addContactToggle,
	getAllContacts,
	getSelfDetail,
	getSingleOwnerUser,
	updateProfile,
} from "../controllers/tenantUserControllers.js";
const router = express.Router();

router.get("/owner-user/:slug", getSingleOwnerUser);
router.get("/profile", getSelfDetail);
router.patch("/profile", updateProfile);
router.patch("/addContact/:id", addContactToggle);
router.get("/contacts/all", getAllContacts);

export default router;
