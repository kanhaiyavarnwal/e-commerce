import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/userAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyRazorpay,
  verifyStripe,
} from "../controllers/OrderControllers.js";

const router = express.Router();
// admin route
router.post("/allProducts", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus);

// payment features

router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);
router.post("/razorpay", authUser, placeOrderRazorpay);

//user feature

router.post("/userOrders", authUser, userOrders);

// verify payment
router.post("/verifyStripe", authUser, verifyStripe);
router.post("/verifyrazorpay", authUser, verifyRazorpay);

export default router;
