import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Successfully....");
  } catch (error) {
    console.error("Failed...", error);
    process.exit(1);
  }
};
