//  placing order using cod

import orderModel from "../models/orderModel.js";
import userModel from "../models/userSchema.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/Asynchandler.js";
import Stripe from "stripe";
import Razorpay from "razorpay";
import { ApiError } from "../utils/ApiError.js";

// global variable
const currency = "EUR";
const deliveryCharges = 1;

// gate initializations
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const placeOrder = asyncHandler(async (req, res) => {
  const { userId, items, amount, address } = req.body;

  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod: "COD",
    payment: false,
    date: Date.now(),
  };

  const newOrder = await orderModel.create(orderData);
  // await newOrder.save()

  await userModel.findByIdAndUpdate(userId, { cartData: {} });

  res.json(new ApiResponse(200, {}, "Order-placed"));
});

// payment method stripe
const placeOrderStripe = asyncHandler(async (req, res) => {
  const { userId, items, amount, address } = req.body;

  const { origin } = req.headers;

  const orderData = {
    userId,
    items,
    address,
    amount,
    paymentMethod: "Stripe",
    payment: false,
    date: Date.now(),
  };

  const newOrder = new orderModel(orderData);
  await newOrder.save();

  const line_items = items.map((item) => ({
    price_data: {
      currency: currency,
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));
  line_items.push({
    price_data: {
      currency: currency,
      product_data: {
        name: "Delivery Charges",
      },
      unit_amount: deliveryCharges * 100,
    },
    quantity: 1,
  });

  const session = await stripe.checkout.sessions.create({
    success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
    line_items,
    mode: "payment",
  });

  res.json(
    new ApiResponse(200, { session_url: session.url }, "stripe payment"),
  );
});

// verify stripe payment
const verifyStripe = asyncHandler(async (req, res) => {
  const { orderId, success, userId } = req.body;

  if (success === "true") {
    await orderModel.findByIdAndUpdate(orderId, { payment: true });
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json(new ApiResponse(200, {}, "payment success"));
  }
});

// payment method razorpay
const placeOrderRazorpay = asyncHandler(async (req, res) => {
  const { userId, items, amount, address } = req.body;

  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod: "Razorpay",
    payment: false,
    date: Date.now(),
  };

  const newOrder = new orderModel(orderData);
  await newOrder.save();

  const options = {
    amount: amount * 100,
    currency: currency.toUpperCase(),
    receipt: newOrder._id.toString(),
  };

  await razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      console.log(err);
      throw new ApiError(501, err.message);
    }
    res.json(new ApiResponse(200, order, "payment created throuth razorpay"));
  });
});

const verifyRazorpay = asyncHandler(async (req, res) => {
  const { userId, razorpay_order_id } = req.body;

  const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

  if (orderInfo.status === "paid") {
    await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json(new ApiResponse(200, {}, "payment success"));
  } else {
    throw new ApiError(500, "Payment failed  ");
  }
});

// for all orders data for admin panel

const allOrders = asyncHandler(async (req, res) => {
  const Orders = await orderModel.find({});

  res.json(new ApiResponse(200, Orders, "fetch all orders"));
});

//userdata for frontend
const userOrders = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  // console.log(userId)
  const orders = await orderModel.find({ userId }).populate("items");
  // console.log("orders: ",orders)
  res.json(new ApiResponse(200, orders, ""));
});

// update order status for admin

const updateStatus = asyncHandler(async (req, res) => {
  const { orderId, status } = req.body;  

  await orderModel.findByIdAndUpdate(orderId, { status });

  res.json(new ApiResponse(200, {}, "status updated"));
});

export {
  placeOrder,
  updateStatus,
  userOrders,
  allOrders,
  placeOrderRazorpay,
  placeOrderStripe,
  verifyStripe,
  verifyRazorpay,
};
