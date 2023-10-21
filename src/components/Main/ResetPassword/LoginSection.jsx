import React, { useContext, useState ,useEffect} from 'react';
import './LoginSection.scss';
import Google from "./../../../assets/icons/Google.svg";
import Teactable from "./../../../assets/icons/Teactable.svg";
import { ReactComponent as ShowPassword } from './../../../assets/svg/ShowPassword.svg';
import { ReactComponent as HidePassword } from './../../../assets/svg/HidePassword.svg';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const LoginSection = () => {
    console.log("a");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const userId = queryParams.get('userId');

    const isResetMode = token && userId;
    const navigate = useNavigate();
    useEffect(() => {
        if (!isResetMode) {
            navigate("/login");
        }
    }, []);

    const [credentials, setCredentials] = useState({
        userNameOrEmail: '',
        password: '',
        userId: userId,
        resetToken: token,
        newPassword: '',
        confirmedNewPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { dispatch } = useContext(AuthContext);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isResetMode) {
                const res = await axios.post("http://bashirja-005-site10.etempurl.com/api/v1/Auth/UpdatePasswordAsync", {
                    UserId: credentials.userId,
                    ResetToken: credentials.resetToken,
                    NewPassword: credentials.newPassword,
                    ConfirmedNewPassword: credentials.confirmedNewPassword
                    
                });
                navigate("/login")
                // You might want to navigate to a different page or display a success message here
            } else {
                // Existing login logic goes here...
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className='login'>
            <div className="container">
                <div className='login-section'>
                    <form onSubmit={handleSubmit}>
                        {isResetMode ? (
                            <>
                                <h6>Reset Password</h6>
                                <div className='inputs-form'>
                                    <label htmlFor="newPassword">New Password</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='inputs-form'>
                                    <label htmlFor="confirmedNewPassword">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmedNewPassword"
                                        name="confirmedNewPassword"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className='button-login' type="submit">Reset Password</button>
                            </>
                        ) : (
                            <>
                                <h6>Login</h6>
                                <div className='inputs-form'>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="userNameOrEmail"
                                        name="userNameOrEmail"
                                        onChange={handleChange}
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
                                        />
                                        <div className='show-hide' onClick={togglePasswordVisibility}>
                                            {showPassword ? <HidePassword /> : <ShowPassword />}
                                        </div>
                                    </div>
                                </div>
                                <div className='pass-remember'>
                                    <label className="custom-checkbox">
                                        Remember me
                                        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                                        <span className="geekmark"></span>
                                    </label>
                                    <div className='forget-password'>Forgot password</div>
                                </div>
                                <button className='button-login' type="submit">Login</button>
                            </>
                        )}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </form>
                    <div className='lines'>
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                    <ul className='login-section-others'>
                        <li>
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
        </section>
    );
};

export default LoginSection;
