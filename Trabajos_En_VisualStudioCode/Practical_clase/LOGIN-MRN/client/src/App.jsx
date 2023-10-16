import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './assets/pages/RegisterPage';
import LoginPage from './assets/pages/LoginPage';
function App(){
  return (
   <>
   <BrowserRouter >
   
   <Routes>
<Route path='/' element ={<h1>Home page</h1>}   />
<Route path='/login' element ={LoginPage}   />
<Route path='/register' element ={RegisterPage}   />
<Route path='/tasks' element ={<h1>Tasks page</h1>}   />
<Route path='/add-task' element ={<h1>New Taks page</h1>}   />
<Route path='/task/:id' element ={<h1>Update page</h1>}   />
<Route path='/profile' element ={<h1> Profile page</h1>}   />

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App