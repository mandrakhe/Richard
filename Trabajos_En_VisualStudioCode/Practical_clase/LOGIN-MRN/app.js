import express from 'express';
import morgan from 'morgan';
import authRoutes from './src/routes/auth.routes.js';
import taskRoutes from './src/routes/task.routes.js'
// import cookieParser from 'cookie-parser';

const app = express();
app.use(morgan('dev'));
// app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app;