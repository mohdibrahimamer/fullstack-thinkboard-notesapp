import mongoose from "mongoose";

// yaha per connectDb ka arrow function likhre jo async function hain
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};
