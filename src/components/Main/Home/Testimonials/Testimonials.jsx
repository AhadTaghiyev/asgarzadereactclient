import React, { useEffect } from 'react'
import "./Testimonials.scss";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonials } from './../../../../redux/actions/testimonialsActions'

const Testimonials = () => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.testimonials)
    console.log(data);
    useEffect(() => {
        dispatch(fetchTestimonials());
    }, [dispatch]);

    return (
        <section className='testimonials-section'>
            <div className="container">
                <div className='testimonials-section-container'>
                    <h2>
                        Testimonials
                    </h2>
                    <div className='testimonials'>
                        <Swiper
                            className='testimonials_content'
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            spaceBetween={100}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                        >
                            {
                                data && data.items ? (
                                    data.items.map((slide) => (
                                        <SwiperSlide key={slide.id} className='thought-area'>
                                            <div className="testimonial">
                                                <div>
                                                    <img  src={`${slide.imageUrl}`} alt={slide.imageName} />
                                                </div>
                                                <div className='opinion'>
                                                    <div className="name-skill">
                                                        <h6>{slide.name}</h6>
                                                        <span>{slide.position}</span>
                                                    </div>
                                                    <div className="text-area">
                                                        <p>{slide.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p>No data available</p>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>)
}

export default Testimonials