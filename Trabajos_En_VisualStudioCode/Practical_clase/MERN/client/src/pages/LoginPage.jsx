import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const {singin,errors:singinErrors} = useAuth();
  
  const onSubmited = handleSubmit(async (data) => {
    singin(data);
})
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
     singinErrors.map((error, i) => (
        <div className="bg-red-500 text-white p-2 my-2" key={i}>
            {error}
        </div>
    ))
}
      <form onSubmit={onSubmited}>
                
                <input type="email" {...register('email', { required: true })} placeholder='email' className='w-full bg-zinc-600 text white py-4 rounded-md my-2'/>
                {
                    errors.email && <p className='text-red-500'>email is required</p>
                }
                <input type="password" {...register('password', { required: true })} placeholder='password'className='w-full bg-zinc-600 text white py-4 rounded-md my-2' />
                {
                    errors.password && <p className='text-red-500'>password is required</p>
                }
                <button type="submit" className="rounded bg-blue-400 hover:bg-slate-700 text-white font-bold py-2 px-4">Login</button>
            </form>

    </div>
    </div>
  )
}

export default LoginPage
