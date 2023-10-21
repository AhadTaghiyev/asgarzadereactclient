import React from 'react'
import "./HeroSection.scss"
import vector from "./../../../../assets/icons/Vector.svg"
import Violet from "./../../../../assets/svg/Violet.svg"

const HeroSection = ({mottoText,mottoFilePath}) => {
  return (
    <section className='hero_section-courses'>
      <div className="container">
        <div className='main-hero-courses'>
          <div className='main-hero-courses-left'>
            <div className='texts'>
              <h1>Available <span className='special-header-text'>Courses</span> </h1>
              <p>{mottoText} </p>
            </div>
            <div className='button-courses'>
              <span>Our courses</span>
              <img src={vector} alt="vector" />
            </div>
          </div>
          <div className="main-hero-courses-right">
            <img src={mottoFilePath} alt="violet" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default HeroSection