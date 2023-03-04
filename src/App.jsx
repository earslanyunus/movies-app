import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    //if url is / then redirect to /home
       const navigate = useNavigate()
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home')
        }

    },[]
    )




  return (
    <>
        <Outlet/>
    </>
  )
}

export default App
