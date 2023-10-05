import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';



export  function createTokenAccess(payload){

    return new Promise((resolve, reject) => {
        jwt.sign(payload,TOKEN_SECRET,
            {
                expiresIn: "id"
            },
            (err,token)=>{
                if (err)reject (err);
                resolve(token);
            }
            );
    })


}
