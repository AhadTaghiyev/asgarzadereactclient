import React ,{useEffect}from 'react'
import "./AvailableCourses.scss"
import CardImage from "./../../../../assets/images/CardImage.png"
import rovshan from "./../../../../assets/images/Rovshan.png"
import SubscribeButton from "./../../../common/Buttons/Subscribe"
import comingsoon from "./../../../../assets/images/comingsooon.png"
import ComingSoonText from "./../../../../assets/svg/comingsoon.svg"
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../../../../redux/actions/coursesActions'


const AvailableCourses = ({ scrollToSubscribeSection }) => {
    const navigate = useNavigate()
    const handleClick = (courseId) => {
      console.log("a");
      navigate(`/video/${courseId}`);
      window.scrollTo(0, 0);
    }
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.courses)
  
    useEffect(() => {
      dispatch(fetchCourses());
    }, [dispatch]);


    return (
        <section className='available-courses'>
            <div className="container">
                <div className='available-courses-container'>
                    <h2>
                        Available  <span className='special-header-text'>Courses</span>
                    </h2>
                    <ul className='available-courses-container_cards'>
                    {data && data.items ? (
            data.items.map((course) => (
              <li key={course.id} onClick={() => handleClick(course.id)}>
                <div className='image-side'>
                  <img src={course.image} alt="picture1" className='main_image' />
                </div>
                <div className='info_card'>
                  <h6>{course.title}</h6>
                  <div className='info_card_owner'>
                    <div className='owner'>
                      <span>Teacher: <b>{course.teacherInfo.fullname}</b></span>
                    </div>
                    <span className='price'>
  {course?.discountPrice === 0 ? course.price : 
    <> 
      {course.discountPrice}$
      {'   '} 
      <del>{course.price}</del>
    </> 
  }$
</span>

                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>No data available</p>
          )
          }
                        {/* <li>
                            <div className='image-side'>
                                <img src={comingsoon} alt="picture1" />
                                <div className='comingsoon'>
                                    <img src={ComingSoonText} alt="text" />
                                    <SubscribeButton scrollToSubscribeSection={scrollToSubscribeSection} />
                                </div>
                            </div>
                            <div className='info_card'>
                                <h5>Subscribe to be the first to learn about new courses.</h5>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AvailableCourses