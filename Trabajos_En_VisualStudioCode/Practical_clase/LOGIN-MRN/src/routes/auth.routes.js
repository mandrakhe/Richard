import {Router} from "express";
import { register, login,logout,profile } from "../controllers/auth.controller.js";
import {requiredAuth} from "../middlewares/tokenValidation.js";
import { registerSchema,loginSchema } from "../schemas/auth.schema.js";//esta no
import { validateSchema } from "../middlewares/validator.middeware.js";


const router = Router();

//el tio aa
router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',requiredAuth,profile);


export default  router;