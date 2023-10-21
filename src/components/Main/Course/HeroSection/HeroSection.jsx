import React from 'react'
import './HeroSection.scss'
import language from './../../../../assets/icons/Language.svg'
import update from './../../../../assets/icons/Update.svg'
import star from './../../../../assets/svg/Star.svg'
import Card from './Card'

const HeroSection = ({ courseData }) => {
    console.log(courseData.data);
    function ShowLastUpdate({ time }) {
      console.log(time);
      const lastUpdateDate = time?.split("T")[0];
      return <span>Last update: {lastUpdateDate}</span>;
    }
    
  return (
    <section className='hero-section-course'>
      <div className="container">
        <h1 className='expanded'>The Secret of <span className='special-header-text'> Orhestration</span></h1>
        <div className="hero-section-course-container">
          <div className='hero-section-course-container-left'>
            <div className='hero-section-course-container-left_header'>
              <h1> <span className='special-header-text'> {courseData?.data?.title}</span></h1>
              {/* <p>{courseData?.data?.description}</p> */}
            </div>
            <div className='hero-section-course-container-left_student-rate'>
           
              <span>{courseData?.data?.enrolCount} student</span>
              <span>by <span className='special-header-text'>{courseData?.data?.teacherInfo?.fullname}</span></span>
            </div>
            <div className='hero-section-course-container-left_details'>
              <div className='update-time'>
                <img src={update} alt="update" />
                <ShowLastUpdate time={courseData?.data?.updatedAt} />
                {/* <span>Last update: {courseData?.data?.updatedAtsplit("T")[0]}</span> */}
              </div>
              <div className='language'>
                <img src={language} alt="language" />
                <span>{courseData.data?.language}</span>
              </div>
            </div>
          </div>
          <div className="hero-section-course-container-right">
            <Card courseData={courseData} />
          </div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection