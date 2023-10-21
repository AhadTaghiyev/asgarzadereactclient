import React from 'react'
import './Included.scss'
import { ReactComponent as CheckBlue } from './../../../../../../assets/svg/CheckBlue.svg'
import { ReactComponent as Satisfaction } from './../../../../../../assets/svg/Satisfaction.svg'

const Included = () => {
    return (
        <div className='included-payment'>
            <div className='included-payment_head'>
                <h5>Here's what's included</h5>
                <ul>
                    <li>
                        <CheckBlue />
                        <p>More than 90 video lectures</p>
                    </li>
                    <li>
                        <CheckBlue />
                        <p>Pdf files, assignments</p>
                    </li>
                    <li>
                        <CheckBlue />
                        <p>Community</p>
                    </li>
                </ul>
            </div>
            <div className='included-payment_satisfaction'>
                <Satisfaction />
            </div>
        </div>
    )
}

export default Included