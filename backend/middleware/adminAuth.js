import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/Asynchandler.js";
import { ApiError } from "../utils/ApiError.js";

const adminAuth = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    throw new ApiError(403, {}, "Not authorized Login Again");
  } else {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      throw new ApiError(403, {}, "Not authorized Login Again");
    }
    next();
  }
});
export default adminAuth;
