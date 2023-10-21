import React from 'react'
import './GetStarted.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../../../../../context/ContextProvider'

const GetStarted = () => {
    const navigate = useNavigate()
    const { loginIn } = useContext(MainContext)
    const handleLogin = () => {
        navigate('/login')
        window.scrollTo(0, 0)
    }
    return (
        <div className='get-started-payment'>
            <div className='get-started-payment_head'>
                <h5>Get started</h5>
                <div className='get-started-payment_head_text'>
                    <p>Providing your email allows us to send you everything you need for your purchase.</p>
                    {loginIn ? null :
                        <div className='get-started-payment_head_text_login'>
                            <span>Already have an account?</span>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    }
                </div>
            </div>
            <div className='get-started-payment_field'>
                <div className="field">
                    <h5>Email adress</h5>
                    <input type="text" />
                </div>
                <div className="checkbox">
                    <label className="custom-checkbox">
                        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                        <span className="geekmark"></span>
                    </label>
                    <p>Yes, The Secrets Of Orchestration can email me with promotions and news. (optional)</p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted