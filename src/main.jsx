import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./views/Signup.jsx";
import Store from "./store/index.js";
import {Provider} from "react-redux";
import PrivateRoute from "./router/PrivateRoute.jsx";
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import './style.css'
import MovieDetail from "./views/MovieDetail.jsx";
const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
        {
            path: '/signup',
            element: <PrivateRoute><Signup/></PrivateRoute>,
        },
        {
            path: '/home',
            element: <Home/>,

        },
        {
            path: '/login',
            element:<Login/>

        },
        {
            path:'/movie/:id',
            element:<MovieDetail/>
        }
    ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Provider store={Store}  >
      <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>,
)
