import { express } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";


const app = express();
app.use (express.json());
app.use (cookieParser());//para manejar y acceder de forma más sencilla a las cookies
app.use(morgan('dev'));
app.use("/api",authRoutes); 


export default   app;