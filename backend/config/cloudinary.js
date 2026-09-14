import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    console.log("cloudinary connected successfully");
  } catch (err) {
    console.log("connection err in cloudinary: ", err.message);
  }
};

export default connectCloudinary;
