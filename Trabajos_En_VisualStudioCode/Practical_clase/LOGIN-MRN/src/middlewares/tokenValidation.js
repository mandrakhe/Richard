import { Jwt } from "jsonwebtoken";
import {TOKEN_SECRET_KEY} from "../config.js";

export const requiredAuth = (req, res, next) => {
const { token} = req.cookies;
if (!token) 
return res.status(401),json ({message: " No Token, Authentication Required"});

Jwt.verify(token,TOKEN_SECRET_KEY,(err,user)=>{
    if (err) res.status(403).json({message: "Invalid Token"});
    req.user = user;
    next();
})

};
