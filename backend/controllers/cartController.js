import userModel from "../models/userSchema.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/Asynchandler.js";

// add products to user cart

const addToCart = asyncHandler(async (req, res) => {
  const { userId, itemId, size } = req.body;

  const userData = await userModel.findById(userId);

  if (!userData) {
    throw new ApiError(404, "User not found");
  }

  let cartData = userData.cartData || {};

  // console.log("cartData:", cartData);

  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }

  await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

  res.status(201).json(new ApiResponse(201, {}, "Added to cart"));
});

const updateCart = asyncHandler(async (req, res) => {
  const { userId, itemId, size, quantity } = req.body;
  const userData = await userModel.findById(userId);

  let cartData = await userData.cartData;
  cartData[itemId][size] = quantity;

  await userModel.findByIdAndUpdate(userId, { cartData });
  res.json(
    new ApiResponse(200, {}, "update your cart"),
    // {success:true,message:"Update Your Cart"}
  );
});

const getUserCart = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const userData = await userModel.findById(userId);

  let cartData = await userData.cartData;

  res.json(
    new ApiResponse(200, cartData, ""),
    // {success:true,cartData}
  );
});

export { addToCart, updateCart, getUserCart };
