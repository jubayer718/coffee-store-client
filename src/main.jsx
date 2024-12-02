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
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://coffee-store-server-brown-delta.vercel.app/coffee'),
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
        loader:({params})=>fetch(`https://coffee-store-server-brown-delta.vercel.app/coffee/${params._id}`)
      }, {
        path: 'signIn',
        element:<SignIn></SignIn>
      }, {
        path: 'signUp',
        element:<SignUp></SignUp>
      }, {
        path: '/users',
        element: <Users></Users>,
        loader:()=>fetch('https://coffee-store-server-brown-delta.vercel.app/users')
      }
     
    ]
    
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
