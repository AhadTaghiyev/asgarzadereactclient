import React from 'react'
import './MainAction.scss'
import { ReactComponent as Lock } from './../../../../../../assets/svg/Lock.svg'

const MainAction = () => {
    return (
        <div className='main-action-payment'>
            <div className='main-action-payment-head'>
                <div className='secure'>
                    <Lock />
                    <p>All transactions are secure and encrypted.</p>
                </div>
                <button>Buy now</button>
            </div>
            <p className='terms'>By completing this purchase, you agree to  The Secrets Of Orchestration's <span style={{color:"white"}}>Terms of Use &  Privacy Policy</span>, and Teachable's <span> Terms of Use & Privacy Policy </span>.</p>
        </div>
    )
}

export default MainAction