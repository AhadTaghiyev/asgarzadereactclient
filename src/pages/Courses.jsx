import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../components/Main/Courses/HeroSection';
import Cards from './../components/Main/Courses/Cards';
import UpcomingCourses from './../components/Main/Courses/UpcomingCourses';
import Subscribe from './../components/Main/Courses/Subscribe';
import { fetchSettingss } from '../redux/actions/settingsActions'
import { useDispatch, useSelector } from 'react-redux';
const Courses = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.settings)
console.log(data);
  useEffect(() => {
      dispatch(fetchSettingss());
     
  }, [dispatch]);
  const mottoText = data?.data?.mottoText || 'Default Hero Text'; 
  const mottoFilePath = data?.data?.mottoFilePath || 'Default Hero File';
 
  
  return (
    <>
      <Helmet>
        <title>Courses | Music School</title>
        <meta name='description' content='It is about Courses page of Music School' />
      </Helmet>
      <HeroSection mottoText={mottoText} mottoFilePath={mottoFilePath} />
      <Cards />
      {/* <UpcomingCourses /> */}
      <Subscribe />
    </>
  )
}

export default Courses