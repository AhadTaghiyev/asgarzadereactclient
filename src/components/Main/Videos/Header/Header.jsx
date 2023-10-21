import React, { useState } from 'react'
import './Header.scss'
import { ReactComponent as MiniLogo } from './../../../../assets/logo/LogoMini.svg'
import { ReactComponent as Settings } from './../../../../assets/icons/Settings.svg'
import { ReactComponent as VectorRight } from './../../../../assets/icons/VectorRight.svg'
import { useNavigate } from 'react-router'


const Header = ({enrolStatus}) => {
    const handleCoompleete=()=>{
        console.log("test");
    }
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const navigate = useNavigate()
    const handleSettingToggle = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };
    const handleClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }
    return (
        <div className='header-general'>
            <div className='header-left'>
                <MiniLogo onClick={handleClick} style={{ cursor: "pointer" }} />
                <div
                    className='icon-settings'
                    onClick={handleSettingToggle}
                >
                    <Settings />
                </div>
                {isSettingsOpen && (
                    <div
                        className='player-settings'
                        style={{ opacity: isSettingsOpen ? 1 : 0 }}
                    >
                        <div className='field'>
                            <span>AutoPlay</span>
                            <label className="switch">
                                <input className='switch-input' type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='field'>
                            <span>Autocomplete</span>
                            <label className="switch">
                                <input className='switch-input' type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                )}
            </div>
              {
                (enrolStatus===true&& <div className='header-right'>
                <button onClick={e=>handleCoompleete()}>
                    Complete and Continue
                    <VectorRight className='right' />
                </button>
            </div>)
              }
        </div>

    )
}

export default Header