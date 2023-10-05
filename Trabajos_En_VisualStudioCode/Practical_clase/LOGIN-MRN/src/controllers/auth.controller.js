import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';

export const register = async (req, res ) =>{
const {email,password,username} = req.body;
//console.log(email,password,username)
//res.send('registrando')

try {
    const passwordHash = await bcrypt.hash(password,10);
    const newUser = User({
        username,
        email,
        password:passwordHash
    });

    const userSaved =  await newUser.save();
    const token = await createTokenAccess({id:userSaved._idid})
    res.cookie('token', token)
    res.status(201).json({
        id : userSaved._id,
        username : userSaved.username,
        email : userSaved.email
    });
}
catch (error) {
    res.status(500).json({Message : error.message});
}
};


export const logout = (req,res)=>{
    res.cookie('token','',{
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req,res)=>{
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json ({Message: "User Not Found"});

    res.status(201).json({
        id : userFound._id,
        username : userFound.username,
        email : userFound.email
    })
}


export const login = (req, res ) =>res.send ("Login")