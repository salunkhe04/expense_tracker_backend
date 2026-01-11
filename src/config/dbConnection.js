import mongoose from "mongoose";
import config from "./config.js";

const dbUrl = config.DB_URL;

const connectDatabase = async () => {
  try {
      if (mongoose.connections[0].readyState) return;
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database" + error);
  }
};
export default connectDatabase;
