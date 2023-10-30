import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {singup,isAuthenticated,erroros:RegisterErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate('/tasks');
    },[isAuthenticated,navigate])

    const onSubmited = handleSubmit(async (values) => {
        singup(values);
    })


    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">

{
    RegisterErrors && Array.isArray(RegisterErrors) && RegisterErrors.map((error, i) => (
        <div className="bg-red-500 text-white p-2" key={i}>
            {error}
        </div>
    ))
}


{/* {
    RegisterErrors.map((error, i) => (
        <div className="bg-red-500 text-white p-2" key={i}>
            {error}
        </div>
    ))
} */}


            <form onSubmit={onSubmited}>
                <input type="text" {...register('username', { required: true })} placeholder='username'className='w-full bg-zinc-600 text white py-4 rounded-md my-2'  />
                {
                    errors.username && <p className='text-red-500'>username is required</p>
                }
                <input type="email" {...register('email', { required: true })} placeholder='email' className='w-full bg-zinc-600 text white py-4 rounded-md my-2'/>
                {
                    errors.email && <p className='text-red-500'>email is required</p>
                }
                <input type="password" {...register('password', { required: true })} placeholder='password'className='w-full bg-zinc-600 text white py-4 rounded-md my-2' />
                {
                    errors.password && <p className='text-red-500'>password is required</p>
                }
                <button type="submit" className="rounded bg-blue-400 hover:bg-slate-700 text-white font-bold py-2 px-4">Register</button>
            </form>

        </div>

    );
}

export default RegisterPage;