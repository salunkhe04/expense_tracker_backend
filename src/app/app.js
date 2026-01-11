import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import router from "../routes/router.js";

export const app = express();
// export const server = http.createServer(app);

// base middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "2gb" }));
app.use(express.urlencoded({ limit: "2gb", extended: true }));

// server.listen(config.PORT, () =>
//   console.log("listening on port " + config.PORT)
// );

app.use("/api", router);
