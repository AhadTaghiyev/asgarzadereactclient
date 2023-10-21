import React, { useState } from 'react'
import './Chooser.scss'
import { useContext } from 'react';
import { MainContext } from '../../../../context/ContextProvider';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Chooser = ({ onSelectComponent }) => {
    const [selectedItem, setSelectedItem] = useState('Profile');
    const { setLoginIn } = useContext(MainContext)
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSelectComponent = (component) => {
        onSelectComponent(component);
        setSelectedItem(component);
        window.scrollTo(0, 0)
    };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' })
        setLoginIn(false);
        navigate('/');
    }
    return (
        <div className='chooser'>
            <ul>
                <li
                    onClick={() => handleSelectComponent('Profile')}
                    className={selectedItem === 'Profile' ? 'selected' : ''}
                >
                    Edit Profile
                </li>
                <li
                    onClick={() => handleSelectComponent('Subscriptions')}
                    className={selectedItem === 'Subscriptions' ? 'selected' : ''}
                >
                    Manage Subscriptions
                </li>
                <li
                    onClick={() => handleSelectComponent('Purchase')}
                    className={selectedItem === 'Purchase' ? 'selected' : ''}
                >
                    Purchase History
                </li>
                {/* <li
                    onClick={() => handleSelectComponent('Card')}
                    className={selectedItem === 'Card' ? 'selected' : ''}
                >
                    Add / Change Credit Card
                </li> */}
                {/* <li
                    onClick={() => handleSelectComponent('Address')}
                    className={selectedItem === 'Address' ? 'selected' : ''}
                >
                    Address
                </li> */}
                {/* <li
                    onClick={() => handleSelectComponent('Contact')}
                    className={selectedItem === 'Contact' ? 'selected' : ''}
                >
                    Contact
                </li> */}
            </ul>
            <div className='line'></div>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default Chooser