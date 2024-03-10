import express from "express";
const router = express.Router();
import { sendEmail } from "../utils/emailSender.js";


router.post("/", async (req, res) => {
  try {
    const { to, from, subject, body } = req.body;
    await sendEmail(to, from, subject, body);
    res.send({ success: true, message: "Email sent" });
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

export default router;
