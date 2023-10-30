import {z} from 'zod';

export const registerSchema=z.object({
    username : z.string({
        required_errors : "username is required fiel"
    }),
   email:z.string({
    required_errors:"email is required field"
   }).email({
    message:"Invalid email address"
   }),
   password:z.string({
    required_errors:"password is required field"
   }).min(6,{
    message:"Password must be at least 6 characters"
   })
});

export const loginSchema=z.object({

    email:z.string({
        required_errors:"email is required field"
       }).email({
        message:"Invalid email address"
       }),
       password:z.string({
        required_errors:"password is required field"
       }).min(6,{
        message:"Password must be at least 6 characters"
       })
})