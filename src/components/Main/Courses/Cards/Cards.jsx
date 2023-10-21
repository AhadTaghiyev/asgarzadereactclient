import React, { useEffect } from 'react'
import './Cards.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses } from '../../../../redux/actions/coursesActions'

const Cards = () => {
  const navigate = useNavigate();
  const handleClick = (courseId) => {
    console.log("a");
    navigate(`/video/${courseId}`);
    window.scrollTo(0, 0);
  }
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.courses)

  console.log(data);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <section className='cards-courses'>
      <div className="container">
        <ul className='cards-courses-container'>
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
                      <span> {course.teacherInfo.fullname}</span>
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
        </ul>
      </div>
    </section >
  )
}

export default Cards