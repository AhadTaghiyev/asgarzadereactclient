import React, { useState } from 'react'
import './EditProfile.scss'
import Picture from './../../../../../assets/images/EditProfilePicture.png'
import { ReactComponent as Upload } from './../../../../../assets/icons/upload.svg'
import { ReactComponent as ShowPassword } from './../../../../../assets/svg/ShowPassword.svg'
import { ReactComponent as HidePassword } from './../../../../../assets/svg/HidePassword.svg'
import { ReactComponent as Teachtable } from './../../../../../assets/icons/TeachtableWhite.svg'
import { ReactComponent as Google } from './../../../../../assets/icons/Google.svg'

const EditProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleImageUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='edit-profile'>
            <div className='edit-profile_picture'>
                <img src={imageSrc || Picture} alt="editable_picture" />
                <div className='upload' onClick={handleImageUploadClick}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="fileInput"
                        style={{ display: 'none' }}
                    />
                    <Upload />
                    <span>Change</span>
                </div>
            </div>
            <div className='edit-profile_editable_area'>
                <div className='edit-profile_editable_area_profile'>
                    <h5>Profile</h5>
                    <ul>
                        <li className='full-inputs'>
                            <label htmlFor="">Full name</label>
                            <input type="text" placeholder='malahat' />
                        </li>
                        <li className='full-inputs'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='contact@gmail.com' />
                        </li>
                        <li className='full-inputs'>
                            <label htmlFor="password">Password</label>
                            <div className="input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className='show-hide' onClick={togglePasswordVisibility}>
                                    {showPassword ? <HidePassword /> : <ShowPassword />}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
              
                {/* <div className='edit-profile_editable_area_notifications'>
                    <h5>Notifications</h5>
                    <ul>
                        <li>
                            <label className="switch">
                                <input className='switch-input' type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <p>Email me when someone responds to my comments.</p>
                        </li>
                        <li>
                            <label className="switch">
                                <input className='switch-input' type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <p>Email me when someone comments on a discussion I've commented in.</p>
                        </li>
                        <li>
                            <label className="switch">
                                <input className='switch-input' type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <p>Yes, The Secrets Of Orchestration can email me with promotions and news. (optional)</p>
                        </li>
                    </ul>

                </div> */}
            </div>
        </div>
    )
}

export default EditProfile
