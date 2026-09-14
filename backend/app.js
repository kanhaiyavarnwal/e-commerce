

import dotenv from "dotenv";
import connectCloudinary from "./config/cloudinary.js";
import connectDb from "./config/mongodb.js";
import { ApiResponse } from "./utils/apiResponse.js";

import { app2 } from "./app2.js";
import userModel from "./models/userSchema.js";

dotenv.config({
  path: "/.env",
});
const port = process.env.PORT || 6000;

connectCloudinary();
connectDb()
  .then(() => {
    app2.get("/user", (req, res) => {
      return res.json(
        new ApiResponse(203, {userModel }, "your server work"),
      );
    });

    app2.listen(port, (req, res) => {
      console.log(` your port no is runn ${port}`);
    });
  })
  .catch((err) => {
    console.log("facing technical issue in server.js");
  });
