import cors from "cors";
import "dotenv/config";
import express from "express";


export const app = express();
// export const server = http.createServer(app);

// base middleware
app.use(cors());
// app.use(cookieParser());
app.use(express.json({ limit: "2gb" }));
app.use(express.urlencoded({ limit: "2gb", extended: true }));

// app.get("/health", (req, res) => {
//   res.send("OK");
// });


// app.use(router);
//