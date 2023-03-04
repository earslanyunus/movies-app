import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    //page open and navigate to home
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home')
    }, [])



  return (
    <>
        <Outlet/>
    </>
  )
}

export default App
