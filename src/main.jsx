import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  

} from 'react-router-dom' 
import AddCoffee from './Page/AddCoffee.jsx'
import UpdateCoffee from './Page/UpdateCoffee.jsx'
import CoffeeCards from './coffeeCards.jsx'
import UpdatedCoffee from './UpdatedCoffee.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee'),
    children: [
      
  {
    path: "/addCoffee",
    element:<AddCoffee></AddCoffee>
  }, {
    path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
    
      },
      {
        path: "updatedCoffee/:_id",
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params._id}`)
      }
     
    ]
    
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
