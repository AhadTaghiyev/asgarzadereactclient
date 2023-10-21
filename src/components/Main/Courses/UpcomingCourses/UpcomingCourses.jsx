import React from 'react'
import './UpcomingCourses.scss'
import comingsoon from "./../../../../assets/images/comingsooon.png"
import ComingSoonText from "./../../../../assets/svg/comingsoon.svg"

const UpcomingCourses = () => {
    return (
        <section className='upcoming-courses'>
            <div className="container">
                <div className='upcoming-courses-container'>
                    <h2>
                        Upcoming  <span className='special-header-text'>Courses</span>
                    </h2>
                    <ul className='upcoming-courses-container_cards'>
                        <li>
                            <div className='image-side'>
                                <img src={comingsoon} alt="picture1" className='main_image' />
                                <div className='comingsoon'>
                                    <img src={ComingSoonText} alt="text" />
                                </div>
                            </div>
                            <div className='info_card'>
                                <h5>The course about movie soundtracks</h5>
                            </div>
                        </li>
                        <li>
                            <div className='image-side'>
                                <img src={comingsoon} alt="picture1" className='main_image' />
                                <div className='comingsoon'>
                                    <img src={ComingSoonText} alt="text" />
                                </div>
                            </div>
                            <div className='info_card'>
                                <h5>The course about movie soundtracks</h5>
                            </div>
                        </li>
                        <li>
                            <div className='image-side'>
                                <img src={comingsoon} alt="picture1" className='main_image' />
                                <div className='comingsoon'>
                                    <img src={ComingSoonText} alt="text" />
                                </div>
                            </div>
                            <div className='info_card'>
                                <h5>The course about movie soundtracks</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default UpcomingCourses