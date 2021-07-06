import { app } from "./config/server.js";
import "./config/database.js";
import routes from "./api/routes/routes.js";

routes(app);
