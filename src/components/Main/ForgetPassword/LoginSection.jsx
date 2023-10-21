import React, { useContext, useState } from 'react'
import './LoginSection.scss'
import Google from "./../../../assets/icons/Google.svg"
import Teactable from "./../../../assets/icons/Teactable.svg"
import { ReactComponent as ShowPassword } from './../../../assets/svg/ShowPassword.svg'
import { ReactComponent as HidePassword } from './../../../assets/svg/HidePassword.svg'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/authActions';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import {setAuthenticationStatus} from "../../../services/auth"

const LoginSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [emailSent, setEmailSent] = useState(false);


    const [credentials, setCredentials] = useState({
        Email: '',
    });
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();
   
    const handleChange = (e) => {

        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(credentials);
            const res = await axios.post("http://bashirja-005-site10.etempurl.com/api/v1/Auth/ResetPassword", credentials);
            console.log(res.data.statusCode);
            if (res.data.statusCode=='200') {
                setEmailSent(true); 
            } else {
                setErrorMessage(res.data.title);
            }
        } catch (err) {
            setErrorMessage(err.response.data.title);
        }
    };

    return (
        <section className='login'>
            <div className="container">
                <div className='login-section'>
                    <form onSubmit={handleSubmit}>
                    {emailSent ? (
                        <>
                            <h6>Check your email</h6>
                            <button className='button-resend' type="button" onClick={handleSubmit}>Resend Email</button>
                        </>
                    ) : (
                        <>
                            <h6>Forgot Password</h6>
                            <div className='inputs-form'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="Email"
                                    name="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <button className='button-login' type="submit">Send</button>
                        </>
                    )}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </form>
                </div>
            </div>
        </section>
    )
    
}

export default LoginSection