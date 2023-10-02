import { Express } from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";


const app = Express();
app.use (express.json());
app.use(morgan('dev'));
app.use("/api",authRoutes); 


export default   app;