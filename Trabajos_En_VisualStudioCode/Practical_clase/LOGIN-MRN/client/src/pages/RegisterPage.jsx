
import  {useForm} from 'react-hook-form';
import { registerReques } from '../api/auth';
function RegisterPage() {
  const {RegisterPage,handleSubmit} = useForm()  
  return (
    <div className='bg-zinc-800  max-w-md'  >
    <form onSubmit={handleSubmit(async ((values)))} > 
      <input type="text"{...RegisterPage("username",{require:true})}  placeholder='username'
       className=' p-10 rounded-md text-white px-4 py-4 bg-zinc-600  my-2' />  
      <input type="email" {...RegisterPage("email",{require:true})}  placeholder='email'
       className=' p-10 rounded-md text-white px-4 py-4 bg-zinc-600  my-2' />  
      <input type="password" {...RegisterPage("password",{require:true})}  placeholder='password' 
       className=' p-10 rounded-md text-white px-4 py-4 bg-zinc-600  my-2'/> 
      <button type="submit">Register</button> 
    </form>
    </div>
  )
}

export default RegisterPage
