import {Router} from "express";
import { register, login,logout,profile } from "../controllers/auth.controller";
import {requiredAuth} from "../middlewares/tokenValidation.js";

const router = Router ();


router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
router.post('/profile',profile);
router.post('/profile',requiredAuth,profile);


export default  router;