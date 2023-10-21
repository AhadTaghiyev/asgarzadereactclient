
import React from 'react'
import "./Instructor.scss"

const Instructor = ({ instructorText, instructorFile }) => {
    return (
        <section className='instructor'>
            <div className="container">
                <div className='instructor-container'>
                    <h2>
                        Meet the  <span className='special-header-text'>Instructor</span>
                    </h2>
                    <div className='instructor-container_about'>
                        <img height={400} src={instructorFile} alt="rovshan" />
                        <div className='instructor-container_about_right'>
                            <p>
                                {instructorText}
                            </p>
                            {/* <div className='top-left'></div>
                            <div className='bottom-right'></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instructor