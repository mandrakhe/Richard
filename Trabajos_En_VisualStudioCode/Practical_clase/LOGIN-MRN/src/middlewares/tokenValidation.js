import { Jwt } from "jsonwebtoken";
import {TOKEN_SECRET_KEY} from "../config.js";


export const requiredAuth = (req, res, next) =>{

const {toke} = req.cookies;
if (!token) return res.status(401).json({ message : "No token, Authorization Denied"});

if (err) res.status (403).json ({message: "Invalid Token"});

req.user = user;
next();

}