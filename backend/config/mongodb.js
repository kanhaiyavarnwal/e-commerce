import mongoose from "mongoose";
import DB_NAME from "../utils/constants.js";
const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      // console.log("DB connected successfully ✅");
    });

    const instance = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`instance ${instance.connection.host}`);
  } catch (error) {
    console.error("DB connection failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
