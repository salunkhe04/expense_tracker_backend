import { app } from "./app/app.js";
import config from "./config/config.js";
import connectDatabase from "./config/dbConnection.js";
import { errorHandler } from "./middleware/errorHandler.js";
import router from "./routes/router.js";

app.use("/", router);
// app.use(notFound);
app.use(errorHandler);
connectDatabase();
app.listen(config.PORT, () => {
  console.log("Listening on port " + config.PORT);
});
