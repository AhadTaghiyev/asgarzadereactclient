import React, { useState } from 'react'
import './Profile.scss'
import Chooser from './Chooser'
import Contact from './Content/Contact'
import ManageSubscription from './Content/ManageSubscriptions'
import PurchaseHistory from './Content/PurchaseHistory'
import EditProfile from './Content/EditProfile'
import CreditCard from './Content/CreditCard'
import Address from './Content/Address'

const Profile = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'Profile':
                return <EditProfile />;
            case 'Subscriptions':
                return <ManageSubscription />;
            case 'Purchase':
                return <PurchaseHistory />;
            case 'Card':
                return <CreditCard />;
            case 'Address':
                return <Address />;
            case 'Contact':
                return <Contact />;
            default:
                return <EditProfile />;
        }
    };
    return (
        <div className='profile-section'>
            <div className="container">
                <div className="profile-section-container">
                    <Chooser onSelectComponent={setSelectedComponent} />
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>
    )
}

export default Profile