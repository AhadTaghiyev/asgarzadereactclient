import React from 'react'
import './HeroSection.scss'
import vector from "./../../../../assets/icons/Vector.svg"
import DownloadsImage from "./../../../../assets/images/DownloadsImage.png"

const HeroSection = ({learnText,learnFile}) => {
    return (
        <section className='hero_section-downloads'>
            <div className="container">
                <div className='main-hero-downloads'>
                    <div className='main-hero-downloads-left'>
                        <div className='texts'>
                            <h1>All <span className='special-header-text'>Downloads</span> </h1>
                            <p>{learnText} </p>
                        </div>
                        <div className='button-downloads'>
                            <span>All Downloads</span>
                            <img src={vector} alt="vector" />
                        </div>
                    </div>
                    <div className="main-hero-downloads-right">
                        <img src={learnFile} alt="violet" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection