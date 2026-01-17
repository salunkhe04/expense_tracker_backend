import serverless from "serverless-http";
import { app } from "../src/app/app.js";

app.get("/", (req, res) => res.send("API is working!"));

export const handler = serverless(app);
