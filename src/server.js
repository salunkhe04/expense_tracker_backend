import { app } from "./app/app.js";
import connectDatabase from "./config/dbConnection.js";
import { errorHandler } from "./middleware/errorHandler.js";
import router from "./routes/router.js";

connectDatabase();
app.use("/", router);
// app.use(notFound);
app.use(errorHandler);
// app.listen(config.PORT, () => {
//   console.log("Listening on port " + config.PORT);
// });

export default app;