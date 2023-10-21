import React from 'react'
import './Testimonials.scss'
import { ReactComponent as Star } from './../../../../assets/svg/Star.svg'
import { ReactComponent as Report } from './../../../../assets/svg/Report.svg'
import imageTest from "./../../../../assets/images/testimonial.png"

const Testimonials = () => {
    return (
        <section className='testimonials-course'>
            <div className="container">
                <div className="testimonials-container">
                    <div className='rate'>
                        <Star width={'32px'} height={'32px'} />
                        <h5>4.5 Course Rate • 398 Rates • 408 Comments</h5>
                    </div>
                    <ul className='comments'>
                        <li>
                            <div className='comment-head'>
                                <div className="owner">
                                    <img src={imageTest} alt="img" />
                                    <div className='owner-info'>
                                        <h6>Lewis Hamilton</h6>
                                        <div className='owner-info_rate_date'>
                                            <ul>
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                            </ul>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='report'>
                                    <span>Report</span>
                                    <Report />
                                </div>
                            </div>
                            <p>Brilliant course. The choice of topics is very wide and I really like the balance of technical and creative aspects. Being an experienced composer and producer, it was still great to brush up on the familiar while still learning a ton of great stuff. So many complex techniques explained in such a nice, accessible way. This course is really worth taking!</p>
                            <span>from Udemy</span>
                        </li>
                        <li>
                            <div className='comment-head'>
                                <div className="owner">
                                    <img src={imageTest} alt="img" />
                                    <div className='owner-info'>
                                        <h6>Lewis Hamilton</h6>
                                        <div className='owner-info_rate_date'>
                                            <ul>
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                            </ul>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='report'>
                                    <span>Report</span>
                                    <Report />
                                </div>
                            </div>
                            <p>Brilliant course. The choice of topics is very wide and I really like the balance of technical and creative aspects. Being an experienced composer and producer, it was still great to brush up on the familiar while still learning a ton of great stuff. So many complex techniques explained in such a nice, accessible way. This course is really worth taking!</p>
                            <span>from Udemy</span>
                        </li>
                        <li>
                            <div className='comment-head'>
                                <div className="owner">
                                    <img src={imageTest} alt="img" />
                                    <div className='owner-info'>
                                        <h6>Lewis Hamilton</h6>
                                        <div className='owner-info_rate_date'>
                                            <ul>
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                                <Star width={"14px"} height={'14px'} />
                                            </ul>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='report'>
                                    <span>Report</span>
                                    <Report />
                                </div>
                            </div>
                            <p>Brilliant course. The choice of topics is very wide and I really like the balance of technical and creative aspects. Being an experienced composer and producer, it was still great to brush up on the familiar while still learning a ton of great stuff. So many complex techniques explained in such a nice, accessible way. This course is really worth taking!</p>
                            <span>from Udemy</span>
                        </li>
                    </ul>
                    <button className='show-more'>Show more comments</button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials