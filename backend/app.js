

import dotenv from "dotenv";
import connectCloudinary from "./config/cloudinary.js";
import connectDb from "./config/mongodb.js";
import { ApiResponse } from "./utils/apiResponse.js";
import express from "express"

 import cookieParser from "cookie-parser";
 import cors from "cors";
 import productRouter from "./routes/productRoute.js";
 import userRouter from "./routes/userRoute.js";
 import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js";

 import userModel from "./models/userSchema.js";

dotenv.config({
  path: "/.env",
});
const app = express()
const port = process.env.PORT || 6000;
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser({}));
  app.use(cookieParser({}));

  app.use("/api/product", productRouter);
  app.use("/api/user", userRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);


  app.use((err, req, res, next) => {
  console.log("ERROR:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err.error || [],
  });
});


connectCloudinary();
connectDb()
  .then(() => {
    app.get("/", (req, res) => {
      return res.json(
        new ApiResponse(203, {userModel }, "your server work"),
      );
    });

    app.listen(port, (req, res) => {
      console.log(` your port no is runn ${port}`);
    });
  })
  .catch((err) => {
    console.log("facing technical issue in server.js",err.message);
  });


