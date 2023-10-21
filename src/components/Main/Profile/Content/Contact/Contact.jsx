import React from 'react'
import './Contact.scss'
import { ReactComponent as Facebook } from './../../../../../assets/icons/FacebookFill.svg'
import { ReactComponent as Instagram } from './../../../../../assets/icons/InstagramFill.svg'
import { ReactComponent as Udemy } from './../../../../../assets/icons/UdemyFill.svg'
import { ReactComponent as Mail } from './../../../../../assets/icons/MailFill.svg'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <div className='contact'>
            <h6>Contact</h6>
            <ul>
                <li>
                    <Link to='https://www.facebook.com/'>
                        <Facebook />
                        <span>Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link to={'https://www.instagram.com/'}>
                        <Instagram />
                        <span>Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link to={'https://www.udemy.com/'}>
                        <Udemy />
                        <span>Udemy</span>
                    </Link>
                </li>
                <li>
                    <Link to={'https://mail.google.com/'}>
                        <Mail />
                        <span>contact@gmail.com</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Contact