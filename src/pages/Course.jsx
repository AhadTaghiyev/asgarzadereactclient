import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../components/Main/Course/HeroSection'
import HeadPart from './../components/Main/Course/HeadPart'
import CourseContent from './../components/Main/Course/CourseContent'
import Description from './../components/Main/Course/Description'
import SuitableFor from './../components/Main/Course/SuitableFor'
import OtherDetails from './../components/Main/Course/OtherDetails'
import Testimonials from './../components/Main/Course/Testimonials'
import Announcement from './../components/Main/Course/Announcement'
import PricingOption from './../components/Main/Course/PricingOption'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Courses = () => {
    const [courseData, setCourseData] = useState([])
    const { _id } = useParams()
    

    const getData = async () => {
        // await axios.get(`https://localhost:7020/api/v1/Course/GetById/${_id}`).then((res) => setCourseData(res.data));
        await axios.get(`http://bashirja-005-site10.etempurl.com/api/v1/Course/GetById/${_id}`).then((res) => setCourseData(res.data));
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
console.log(courseData);
    return (
        <>
            {/* <Helmet>
                <title>Course | Music School</title>
                <meta name='description' content='It is about Course page of Music School' />
            </Helmet> */}
            <HeroSection courseData={courseData} />
            <HeadPart shortInfo={courseData?.data?.shortInfo} />
            <CourseContent chapterCount={courseData?.data?.chapterCount} videoCount={courseData?.data?.videoCount} chapterGetDtos={courseData?.data?.chapterGetDtos} />
            <Description description={courseData?.data?.description}/>
            {/* <PricingOption /> */}
        </>
    )
}

export default Courses