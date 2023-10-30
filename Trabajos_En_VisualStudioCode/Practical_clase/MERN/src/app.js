import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cookieParser from 'cookie-parser';
import  cors from 'cors';


const app = express()
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());// apra manejar y acceder de forma mas sencilla a las cookkies

app.use("/api",authRoutes);
app.use("/api",taskRoutes);


export default app