import express from "express";
const router = express.Router();
import {
  authorizeOwnerUser,
  authorizeTenantUser,
} from "../middleware/userAuthorization.js";

import { sendMessage, getMessages } from "../controllers/chatController.js";


router.post("/owner/send-message", authorizeOwnerUser, sendMessage);
router.post("/owner/get-messages", authorizeOwnerUser, getMessages);
router.post("/tenant/send-message", authorizeTenantUser, sendMessage);
router.post("/tenant/get-messages", authorizeTenantUser, getMessages);

export default router;
