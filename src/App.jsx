
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     
      <div className='w-11/12 mx-auto'>
         <Outlet></Outlet>
     </div>
     
    </>
  )
}

export default App
