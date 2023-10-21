import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import logo from "./../../../assets/logo/Logo.svg"
import Search from "./../../../assets/icons/Search.svg"
import Facebook from "./../../../assets/icons/Facebook.svg"
import Instagram from "./../../../assets/icons/Instagram.svg"
import Youtube from "./../../../assets/icons/Youtube.svg"
import Rectangle from "./../../../assets/svg/Rectangle.svg"
import bottom from "./../../../assets/icons/VectorBottom.svg"
import {getAuthenticationStatus,setAuthenticationStatus} from "../../../services/auth"
import useTokenCheck from "../../../services/tokenCheck"
import { ReactComponent as Account } from './../../../assets/svg/Account.svg'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    useTokenCheck()
    console.log((getAuthenticationStatus()));
    const [isActive, setIsActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [settingActive, setSettingActive] = useState(false);
    // const { loginIn, setLoginIn } = useContext(MainContext)
    // const { dispatch } = useContext(AuthContext)

    const navigate = useNavigate();
    const navClass = location.pathname.startsWith('/video/') ? 'hidden-nav' : '';
    const activeStyle = {
        fontWeight: 700
    }
    const handleDivClick = () => {
        setIsActive(!isActive);
    };
    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    }
    const closeMenu = () => {
        setMenuActive(false);
        console.log('menu closed')
    }
    function handleLinkClick() {
        window.scrollTo(0, 0);
        setSettingActive(false)
    }
    const handleSettingClick = () => {
        setSettingActive((prevState) => !prevState)
    }
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        setAuthenticationStatus(false)
        navigate('/');
        window.scrollTo(0, 0);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');
        window.scrollTo(0, 0);
    }
    const closeMenuIfScreenWidthExceedsLimit = () => {
        if (menuActive && window.innerWidth > 1050) {
            setMenuActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', closeMenuIfScreenWidthExceedsLimit);
        return () => {
            window.removeEventListener('resize', closeMenuIfScreenWidthExceedsLimit);
        };
    }, [menuActive]);

    return (
        <nav className={navClass}>
            <div className="container">
                <div className="navbar-container">
                    <div onClick={handleLinkClick} style={{ cursor: 'pointer' }}>
                        <Link to="/" >
                            <img className='logo' src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className='links'>
                        <li className={`search ${isActive ? 'active-search' : ''}`}>
                            <img src={Search} alt="search" onClick={handleDivClick} />
                            <input type="text" />
                        </li>
                        <li style={isActive ? { display: 'none' } : null} onClick={closeMenu}>
                            <NavLink
                                to="/courses"
                                style={({ isActive }) => (isActive ? activeStyle : null)}
                                onClick={handleLinkClick}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li style={isActive ? { display: 'none' } : null} onClick={closeMenu}>
                            <NavLink
                                to="/downloads"
                                style={({ isActive }) => (isActive ? activeStyle : null)}
                                onClick={handleLinkClick}
                            >
                                Downloads
                            </NavLink>
                        </li>
                        <li style={isActive ? { display: 'none' } : null} onClick={closeMenu}>
                            <NavLink
                                to="/aboutus"
                                style={({ isActive }) => (isActive ? activeStyle : null)}
                                onClick={handleLinkClick}
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className='end-nav' >
                        <img onClick={handleMenuClick} className='nav-bottom' src={bottom} alt="bottom" />
                        <ul className='social'>
                            <li className='social_facebook'>
                                <Link to="https://www.facebook.com/" target='blank'>
                                    <div className='rectangle'>
                                        <img src={Rectangle} alt="rectangle" />
                                    </div>
                                    <img src={Facebook} alt="facebook" className='fb' />
                                </Link>
                            </li>
                            <li className='social_instagram'>
                                <Link to="https://www.instagram.com/" target='blank'>
                                    <div className='rectangle'>
                                        <img src={Rectangle} alt="rectangle" />
                                    </div>
                                    <img src={Instagram} className='insta' alt='instagram' />
                                </Link>
                            </li>
                            <li className='social_youtube'>
                                <Link to="https://www.youtube.com" target='blank'>
                                    <div className='rectangle'>
                                        <img src={Rectangle} alt="rectangle" />
                                    </div>
                                    <img src={Youtube} alt='youtube' className='yt' />
                                </Link>
                            </li>
                        </ul>


                        {
                            getAuthenticationStatus() ?
                                
                                (<div className='account'>
                                    <Account style={{ cursor: 'pointer' }} onClick={handleSettingClick} />
                                    <ul className='account-setting' style={settingActive ? { display: 'flex' } : { display: 'none' }}>
                                        {/* <li onClick={handleLinkClick}>
                                            <Link to='/courses'>My Courses</Link>
                                        </li> */}
                                        <li onClick={handleLinkClick}>
                                            <Link to='/profile'>Edit profile</Link>
                                        </li>
                                        <li className='border' onClick={handleLogout}>
                                            <Link to={'/'}>Log out</Link>
                                        </li>
                                    </ul>
                                </div>)
                                :
                                (<button onClick={handleLogin}>Login</button>)
                        }

                    </div>
                    <div className='menu' style={menuActive ? { display: 'block' } : { display: 'none' }}>
                        <div className="container">
                            <div className="menu-container">
                                <div className={`active-search`}>
                                    <img src={Search} alt="search" onClick={handleDivClick} />
                                    <input type="text" />
                                </div>
                                <ul className='links'>
                                    <li style={isActive ? { display: 'none' } : null}>
                                        <NavLink
                                            to="/courses"
                                            style={({ isActive }) => (isActive ? activeStyle : null)}
                                        >
                                            Courses
                                        </NavLink>
                                    </li>
                                    <li style={isActive ? { display: 'none' } : null}>
                                        <NavLink
                                            to="/downloads"
                                            style={({ isActive }) => (isActive ? activeStyle : null)}
                                        >
                                            Downloads
                                        </NavLink>
                                    </li>
                                    <li style={isActive ? { display: 'none' } : null}>
                                        <NavLink
                                            to="/aboutus"
                                            style={({ isActive }) => (isActive ? activeStyle : null)}
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <div className="top-border"></div>
                                    <div className="bottom-border"></div>
                                </ul>
                                <ul className='social'>
                                    <li className='social_facebook'>
                                        <Link to="https://www.facebook.com/" target='blank'>
                                            <div className='rectangle'>
                                                <img src={Rectangle} alt="rectangle" />
                                            </div>
                                            <img src={Facebook} alt="facebook" className='fb' />
                                        </Link>
                                    </li>
                                    <li className='social_instagram'>
                                        <Link to="https://www.instagram.com/" target='blank'>
                                            <div className='rectangle'>
                                                <img src={Rectangle} alt="rectangle" />
                                            </div>
                                            <img src={Instagram} className='insta' alt='instagram' />
                                        </Link>
                                    </li>
                                    <li className='social_youtube'>
                                        <Link to="https://www.youtube.com" target='blank'>
                                            <div className='rectangle'>
                                                <img src={Rectangle} alt="rectangle" />
                                            </div>
                                            <img src={Youtube} alt='youtube' className='yt' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar