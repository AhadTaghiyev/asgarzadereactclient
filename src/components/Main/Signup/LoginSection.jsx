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
    const [validationErrors, setValidationErrors] = useState({});

    const [credentials, setCredentials] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirmedPassword: '',
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
        setValidationErrors({})
        try {
            const res = await axios.post("http://bashirja-005-site10.etempurl.com/api/v1/Identity/Register", credentials);
            if (res.data.statusCode=="200") {
                navigate("/login");
            } else {
            }
        } catch (err) {
            
            console.log(err.response.data);
        
            if (err.response && err.response.data && err.response.data.errors) {
                setValidationErrors(err.response.data.errors);
            } else {
                    setErrorMessage(err.response.data.title);
            }
        }
    };

    return (
        <section className='login'>
            <div className="container">
                <div className='login-section'>
                <form onSubmit={handleSubmit}>
    <h6>Sign up</h6>
    
    <div className='inputs-form'>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
        />
             {validationErrors.Name && <small className="error-message">{validationErrors.Name[0]}</small>}
    </div>

    <div className='inputs-form'>
        <label htmlFor="surname">Surname</label>
        <input
            type="text"
            id="surname"
            name="surname"
            onChange={handleChange}
        />
             {validationErrors.Surname && <small className="error-message">{validationErrors.Surname[0]}</small>}
    </div>

    <div className='inputs-form'>
        <label htmlFor="email">Email</label>
        <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
        />
             {validationErrors.Email && <small className="error-message">{validationErrors.Email[0]}</small>}

    </div>
    

    <div className='inputs-form'>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
        />
        {validationErrors.Username && <small className="error-message">{validationErrors.Username[0]}</small>}
    </div>

    <div className='full-inputs'>
        <label htmlFor="password">Password</label>
        <div className="input">
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='password'
                onChange={handleChange}
            />


            <div className='show-hide' onClick={togglePasswordVisibility}>
                {showPassword ? <HidePassword /> : <ShowPassword />}
            </div>
        </div>
        {validationErrors.Password && <small className="error-message">{validationErrors.Password[0]}</small>}
    </div>

    <div className='full-inputs'>
        <label htmlFor="confirmedPassword">Confirm Password</label>
        <div className="input">
            <input
                type={showPassword ? 'text' : 'password'}
                id="confirmedPassword"
                name='confirmedPassword'
                onChange={handleChange}
            />

            <div className='show-hide' onClick={togglePasswordVisibility}>
                {showPassword ? <HidePassword /> : <ShowPassword />}
            </div>
            
        </div>
        {validationErrors.ConfirmedPassword && <small className="error-message">{validationErrors.ConfirmedPassword[0]}</small>}
    </div>
    
    <button className='button-login' type="submit">Sign Up</button>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
</form>



                    <span>Already have account?  <a className='createaccount' href='/login'>Sign in</a> </span>
                 
                </div>
            </div>
        </section >
    )
}

export default LoginSection