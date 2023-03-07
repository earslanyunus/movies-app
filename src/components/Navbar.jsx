import React, {useState} from 'react';
import logo from '../assets/LogoandLogotype.svg';
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getProfilePicture, signOut} from "../firebase/index.js";
import Button from "./button/Button.jsx";

// 40px to rem
function Navbar({setIsMenuOpen,isMenuOpen}) {
    const navigate = useNavigate()
    const [profilePic, setProfilePic] = useState(null)
    const isAuth = useSelector(state => state.auth.isAuth)
    const user = useSelector(state => state.auth.user)
    React.useEffect(() => {
        if (user) {
            getProfilePicture(user.uid).then((url) => {
                    setProfilePic(url)
                }
            )

        }
    }, [user])
    const buttonHandler = () => {
        navigate('/login')
    }
    const menuButtonHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='w-screen flex'>
            <nav className={isMenuOpen?'w-[80%] flex flex-col justify-between h-screen border border-b border-gray-200 p-4':'flex  justify-between items-center w-full border border-b border-gray-200 p-4 '}>
                {/*NAVBAR TOP AREA*/}
                <div className='flex flex-col gap-5 items-start lg:flex-row lg:items-center'>
                    <img src={logo} className='h-8' alt=""/>
                    {/*NAVBAR SEARCH*/}
                    <div className={isMenuOpen?'relative w-full':'hidden lg:block lg:relative '}>
                        <input type="text" placeholder='Search' name="" id=""
                               className='w-full px-3.5 w-full py-2.5 pl-11 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 placeholder:text-text-md placeholder:font-normal focus:primary focus:shadow-[0px_0px_0px_4px_#F4EBFF]'/>
                        <span
                            className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                    </div>
                    {/*NAVBAR LINK*/}
                    <div className={isMenuOpen?'flex flex-col gap-1 w-full':'hidden lg:block lg:flex-row lg:flex'}>
                        <div className='w-full'>
                            <NavLink to={'/home'} className={({isActive}) =>
                                `flex items-center  py-2 px-3 w-full gap-3 text-text-md font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 ${isActive && 'bg-gray-50 text-gray-900'}`
                            }>
                                <span className="material-symbols-rounded text-gray-500">home</span>
                                Home
                            </NavLink>
                        </div>
                        <div className='w-full'>
                            <NavLink to={'/explore'} className={({isActive}) =>
                                `flex items-center  py-2 px-3 w-full gap-3 text-text-md font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-900 ${isActive && 'bg-gray-50 text-gray-900'}`
                            }>
                                <span className="material-symbols-rounded ">emoji_objects</span>
                                Explore
                            </NavLink>
                        </div>
                        <div>

                        </div>

                    </div>


                </div>
                {/*NAVBAR MENU BUTTON*/}

                <button className={isMenuOpen?'hidden':'h-auto flex lg:hidden'} onClick={menuButtonHandler}><span className="material-symbols-rounded text-gray-500">menu</span></button>

                {/*  NAVBAR BOTTOM AREA  */}
                <div className={isMenuOpen?'w-full':'hidden lg:block'}>
                    {isAuth && (
                        <div className='flex justify-between w-full border-t pt-6 lg:border-0 lg:pt-0'>
                            <NavLink to={'/profile'} className='flex gap-3'>
                                <img src={profilePic} alt="" className='rounded-full h-10'/>
                                <div className='flex flex-col'>
                                    <p className='text-text-sm font-semibold text-gray-700'>{user.displayName}</p>
                                    <p className='text-text-sm font-normal text-gray-600'>{user.email}</p>
                                </div>

                            </NavLink>
                            <button onClick={signOut}><span className="material-symbols-rounded">logout</span></button>

                        </div>

                    )
                    }
                    {!isAuth && (
                        <Button onClick={buttonHandler} variant={'primary'} text='Login'></Button>
                    )}
                </div>

            </nav>
            {/*NAVBAR CLOSE SIDE*/}
            <div className={isMenuOpen?'w-[20%] bg-gray-500 h-screen flex justify-center items-start pt-4':'hidden'}>
                <button onClick={menuButtonHandler} ><span className="material-symbols-rounded text-white">close</span></button>
            </div>
        </div>
    );
}

export default Navbar;