
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully ✅");
    });

    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.error("DB connection failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;

