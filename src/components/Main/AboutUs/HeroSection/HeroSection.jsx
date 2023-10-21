import React from 'react'
import './HeroSection.scss'
import vector from "./../../../../assets/icons/Vector.svg"
import AboutUsImage from "./../../../../assets/images/AboutUsImage.png"

const HeroSection = ({aboutText,aboutFile}) => {
    return (
        <section className='hero_section-aboutUs'>
            <div className="container">
                <div className='main-hero-aboutUs'>
                    <div className='main-hero-aboutUs-left'>
                        <div className='texts'>
                            <h1>About  <span className='special-header-text'>Us</span> </h1>
                            <p>{aboutText}</p>
                        </div>
                        <div className='button-aboutUs'>
                            <span>More Info</span>
                            <img src={vector} alt="vector" />
                        </div>
                    </div>
                    <div className="main-hero-aboutUs-right">
                        <img src={aboutFile} alt="violet" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection