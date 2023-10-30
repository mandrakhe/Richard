import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const requiredAuth = (req, res, next) => {
    // console.log ('authenticated');
    const {token} = req.cookies;
    console.log (token);
    if(!token)
    return res.status(401).json({message: 'No Token, Access denied'});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) res.status(err).json({message:'invalid token'});
        req.user = user;
        next();
    });
}