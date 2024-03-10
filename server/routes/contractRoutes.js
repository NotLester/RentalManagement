import express from "express";
const router = express.Router();
import {
  createContract,
  getContractDetailTenantView,
  approveContract,
  getContractDetailOwnerView,
  deleteContract,
  getOwnerAllContracts,
  getAllTenantRentalProperties,
  getTenantContractDetail,
} from "../controllers/contractControllers.js";
import {
  authorizeOwnerUser,
  authorizeTenantUser,
} from "../middleware/userAuthorization.js";


router.post("/", authorizeOwnerUser, createContract);
router.get(
  "/tenantView/:contractId",
  authorizeTenantUser,
  getContractDetailTenantView
);
router.patch("/approve/:contractId", authorizeTenantUser, approveContract);
router.get(
  "/ownerView/:realEstateId",
  authorizeOwnerUser,
  getContractDetailOwnerView
);
router.delete("/delete/:contractId", authorizeOwnerUser, deleteContract);
router.get("/owner/allContracts", authorizeOwnerUser, getOwnerAllContracts);
router.get(
  "/tenantUser/allRentalProperties",
  authorizeTenantUser,
  getAllTenantRentalProperties
);
router.get(
  "/tenant/:realEstateId",
  authorizeTenantUser,
  getTenantContractDetail
);

export default router;
