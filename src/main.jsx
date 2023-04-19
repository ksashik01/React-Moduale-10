import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import RegisterRBS from './component/Registerrbs/RegisterRBS';
import RegisterBS from './component/RegisterBS/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[

{
  path:'/',
  element:<Home></Home>

},

{
  path:'/login',
  element:<Login></Login>

},
{
  path:'/register',
  element:<Register></Register>

},

{
  path:'/registerrbs',
  element:<RegisterRBS></RegisterRBS>,

},

{
  path:'/register-bs',
  element:<RegisterBS></RegisterBS>,

}



    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
