import {Router} from "express";
import { register, login,logout,profile } from "../controllers/auth.controller";
import {requiredAuth} from "../middlewares/tokenValidation.js";
import { registerSchema,loginSchema } from "../schemas/auth.schema";
import { validateSchema } from "../middlewares/validator.middeware";


const router = Router ();


router.post('/register',validateSchema(validateSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.post('/profile',profile);
router.post('/profile',requiredAuth,profile);


export default  router;