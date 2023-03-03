//write private router
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({children, ...props}) => {
    const navigate = useNavigate();
    const {isAuth} = useSelector(state => state.auth)
    if (isAuth) {
        navigate('/home')
    }
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute