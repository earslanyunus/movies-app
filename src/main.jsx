import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./views/Signup.jsx";
const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
        {
            path: '/signup',
            element: <Signup/>,
        }
    ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
