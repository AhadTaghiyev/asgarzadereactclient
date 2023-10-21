// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Footer.scss"
import { ReactComponent as CopyRight } from "./../../../assets/svg/Copyright.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-container">
                    <div className='lside-footer'>
                        <CopyRight />
                        <span>The Secrets Of Orchestration 2023</span>
                    </div>
                    <div className='rside-footer'>
                        <span>Terms for use</span>
                        <span>Privacy policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer