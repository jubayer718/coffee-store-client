
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import CoffeeCards from './coffeeCards'
import { useState } from 'react'

function App() {
  
  const loadedCoffees = useLoaderData()

 const [coffees,setCoffees]=useState(loadedCoffees)
  console.log(loadedCoffees)
  const {pathname} = useLocation()
  console.log(location)
  return (
    <>
     <Navbar></Navbar>
      <div className={`${pathname==="/"?'block':'hidden'}`}>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 '>
            {
            coffees.map(coffee => <CoffeeCards
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
          
              coffee={coffee}></CoffeeCards>)
     }
       </div>
     </div>
      <div className='w-11/12 mx-auto'>
         <Outlet></Outlet>
     </div>
     
    </>
  )
}

export default App
