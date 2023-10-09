import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "username is a required field"
    }),
    email : z.string({
        required_error: "email is a required field"
    }).email({
        message:'invalid email address'

    }),
    password : z.string({
        required_error: "password is a required field"
    }).min(6,{
        message:'password must be at laeat 6 characters long'
    })


    

});

export const loginSchema = z.object({
    
    email : z.string({
        required_error: "email is a required field"
    }).email({
        message:'invalid email address'

    }),
    password : z.string({
        required_error: "password is a required field"
    }).min(6,{
        message:'password must be at laeat 6 characters long'
    })

})