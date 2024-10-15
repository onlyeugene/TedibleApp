import mongoose from "mongoose";

export const connectMongoDb = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URL;

  if (!mongoUri) {
    throw new Error("MongoDB connection URL is missing in environment variables");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
