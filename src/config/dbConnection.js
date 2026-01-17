import mongoose from "mongoose";
import config from "./config.js";

const dbUrl = config.DB_URL;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDatabase() {
  if (cached.conn) return cached.conn;

  console.log("Connected to MongoDB");
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(dbUrl, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 30000,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDatabase;
