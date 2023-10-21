import React from 'react'
import "./HeroSection.scss"
import SubscribeButton from '../../../common/Buttons/Subscribe/SubscribeButton'

const HeroSection = ({ heroText, heroFile, scrollToSubscribeSection }) => {
    return (
        <section className='hero_section'>
            <div className="container">
                <div className='main-hero'>
                    <div className='main-hero-left'>
                        <div className='texts'>
                            <span className='special-header-text'>{heroText}</span>
                        </div>
                        <SubscribeButton scrollToSubscribeSection={scrollToSubscribeSection} />
                    </div>
                    <div className="main-hero-right">
                        <video 
                                  
                                    controls muted autoPlay
                                >
                                    <source src={heroFile} type="video/mp4" />
                                </video>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection