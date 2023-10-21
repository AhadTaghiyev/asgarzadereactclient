import React from 'react'
import './PurchaseHistory.scss'
import { Link } from 'react-router-dom'

const PurchaseHistory = () => {
    return (
        <div className='purchase'>
            <div className='purchase-head'>
                <h6>Your purchase history</h6>
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Purchase date</li>
                    <li>Actions</li>
                </ul>
                <div className='line'></div>
            </div>
            {/* <ul className='purchase-lists'>

            </ul> */}
            <div className='purchase-empty'>
                <p>You currently do not have any purchases.</p>
                <p>You can take a look at our active courses <Link to="/profile">here</Link>.</p>
            </div>
        </div>
    )
}

export default PurchaseHistory