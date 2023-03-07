import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
    //if url is / then redirect to /home
    const [isMenuOpen, setIsMenuOpen] = useState(false)
       const navigate = useNavigate()
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home')
        }

    },[]
    )




  return (
    <>
        {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}

        <div className={isMenuOpen?'hidden':'block'}>
        <Outlet/>
        </div>

    </>
  )
}

export default App
