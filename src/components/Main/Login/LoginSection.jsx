import React, { useEffect, useState } from 'react';
import './LoginSection.scss'
import Google from "./../../../assets/icons/Google.svg"
import Teactable from "./../../../assets/icons/Teactable.svg"
import { ReactComponent as ShowPassword } from './../../../assets/svg/ShowPassword.svg'
import { ReactComponent as HidePassword } from './../../../assets/svg/HidePassword.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {setAuthenticationStatus} from "../../../services/auth"

const LoginSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
     const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(credentials);
            const res = await axios.post("http://bashirja-005-site10.etempurl.com/api/v1/Identity/Login", credentials);
            if (res.data.accessToken) {
                localStorage.setItem('token', res.data.accessToken);
                setAuthenticationStatus(true)
                navigate("/courses");
            } else {
                
                setErrorMessage(res.data.title);
            }
        } catch (err) {
            setErrorMessage(err.response.data.title);
        }
    };
    function handleGoogleLogin() {
        if (window.google && window.google.accounts && window.google.accounts.id) {
            window.google.accounts.id.prompt((notification) => {
            });
        }
    }
    
    useEffect(() => {
        window.google && window.google.accounts && window.google.accounts.id.initialize({
            client_id: "418883437363-87cvlr8sri4ea95fs47liqlroih6brci.apps.googleusercontent.com", 
            callback: handleGoogleCallback,
            auto_prompt: false
        });
    }, []);

    async function handleGoogleCallback(response) {
        if (response.credential) {
          try {
            await googleLogin(response.credential);
          } catch (error) {
            console.error("Error while logging in with Google:", error);
          }
        } else {
          alert("Sorry, something went wrong");
        }
      }
      
    const googleLogin = async (token) => {
        try {
          const response = await axios.post('http://bashirja-005-site10.etempurl.com/api/v1/Identity/GoogleLogin/google-login', {
            Token: token
          });
          if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
            setAuthenticationStatus(true)
            navigate("/courses");
        } else {
            
            setErrorMessage(response.data.title);
        }
    } catch (err) {
        setErrorMessage(err.response.data.title);
    }
      }

    return (
        <section className='login'>
            <div className="container">
                <div className='login-section'>
                    <form onSubmit={handleSubmit}>
                        <h6>Login</h6>
                        <div className='inputs-form'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={credentials.email}
                            />
                        </div>
                        <div className='full-inputs'>
                            <label htmlFor="password">Password</label>
                            <div className="input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name='password'
                                    onChange={handleChange}
                                    value={credentials.password}
                                />
                                <div className='show-hide' onClick={togglePasswordVisibility}>
                                    {showPassword ? <HidePassword /> : <ShowPassword />}
                                </div>
                            </div>
                        </div>
                        <div className='pass-remember'>
                            <label className="custom-checkbox">
                                Remember me
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    name="myCheckbox"
                                    // checked={rememberMe}
                                    // onChange={handleRememberMeChange}
                                />
                                <span className="geekmark"></span>
                            </label>
                            <a href='/forgotpassword' className='forget-password'>Forgot password</a>
                        </div>
                        <button className='button-login' type="submit">Login</button>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                    </form>
                    <span>Do not have account?  <a className='createaccount' href='/signup'>Create Account</a> </span>
                    <div className='lines'>
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                    <ul className='login-section-others'>
                    
                    <li onClick={handleGoogleLogin}>
    <img src={Google} alt="google-icon" />
    <span>Login with Google</span>
</li>

            
                        <li>
                            <img src={Teactable} alt="teachtable-icon" />
                            <span>Login with Teachtable</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default LoginSection