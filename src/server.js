import { app } from "./app/app.js";
import connectDatabase from "./config/dbConnection.js";
import { errorHandler } from "./middleware/errorHandler.js";
import router from "./routes/router.js";

app.use("/", router);
// app.use(notFound);
app.use(errorHandler);
connectDatabase();
