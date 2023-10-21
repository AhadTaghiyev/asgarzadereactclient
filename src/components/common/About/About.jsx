import React from 'react'
import "./About.scss"

const About = ({aboutText,aboutFile}) => {

    return (
        <section className='about'>
            <div className="container">
                <div className='about-container'>
                    <h2>
                        About the  <span className='special-header-text'>Course</span>
                    </h2>
                    <div className='about-container_about'>
                        <img width={300} src={aboutFile} alt="musicians" />
                        <div className='about-container_about_right'>
                            <p>{aboutText}</p>
                            <div className='bottom-left'></div>
                            <div className='top-right'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About