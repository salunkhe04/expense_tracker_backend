import cors from "cors";
import "dotenv/config";
import express from "express";
export const app = express();

// base middleware
app.use(cors());
// app.use(cookieParser());
app.use(express.json({ limit: "2gb" }));
app.use(express.urlencoded({ limit: "2gb", extended: true }));

