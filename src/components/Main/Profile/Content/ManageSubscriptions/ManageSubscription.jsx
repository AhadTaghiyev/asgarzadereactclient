import React from 'react'
import './ManageSubscription.scss'
import { Link } from 'react-router-dom'

const ManageSubscription = () => {
    return (
        <div className='subscription'>
            <div className='subscription-head'>
                <h6>Your Active Subscriptions</h6>
                <ul>
                    <li>Course Name</li>
                    <li>Recurring Price</li>
                    <li>Time of Enrollment</li>
                    <li>Actions</li>
                </ul>
                <div className='line'></div>
            </div>
            {/* <ul className='subscription-lists'>

            </ul> */}
            <div className='subscription-empty'>
                <p>You currently do not have any subscriptions.</p>
                <p>You can take a look at our active courses <Link to="/profile">here</Link>.</p>
            </div>
        </div>
    )
}

export default ManageSubscription