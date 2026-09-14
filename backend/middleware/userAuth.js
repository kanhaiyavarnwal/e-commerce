import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/Asynchandler.js";
import { ApiError } from "../utils/ApiError.js";

const authUser = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    throw new ApiError(404, {}, "not authorized login again");
  }

  const token_decode = jwt.verify(token, process.env.JWT_SECRET);
  req.body.userId = token_decode.id;
  next();
});

export default authUser;
