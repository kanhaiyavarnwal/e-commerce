import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js";

const app2 = express();

app2.use(express.json());
app2.use(cors());
app2.use(cookieParser({}));

app2.use("/api/product", productRouter);
app2.use("/api/user", userRouter);
app2.use("/api/cart", cartRouter);
app2.use("/api/order", orderRouter);
app2.use((err, req, res, next) => {
  console.log("ERROR:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err.error || [],
  });
});

export { app2 };
