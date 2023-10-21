// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

//! Components
import HeroSection from "./../components/Main/Home/HeroSection"
import Instructor from "./../components/common/Instructor"
import About from "./../components/common/About"
import AvailableCourses from "./../components/Main/Home/AvailableCourses"
import LearnFrom from "./../components/common/LearnFrom"
import Cards from "./../components/Main/Home/Cards"
import FeelMusic from "./../components/Main/Home/FeelMusic"
import Testimonials from "./../components/Main/Home/Testimonials"
import Subscribe from "./../components/Main/Home/Subscribe"
import FAQ from './../components/Main/Home/FAQ'
import { fetchSettingss } from '../redux/actions/settingsActions'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
const Home = () => {
  const dispatch = useDispatch()
  const subscribeSectionRef = useRef(null);
  const { data } = useSelector((state) => state.settings)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // dispatch(fetchSettingss());
    dispatch(fetchSettingss()).finally(() => setLoading(false));
  }, [dispatch]);

  const heroText = data?.data?.heroText || 'Default Hero Text';
  const heroFile = data?.data?.heroFilePath || 'Default Hero File';
  const instructorText = data?.data?.instructorText || 'Default Hero Text';
  const instructorFile = data?.data?.instructorFilePath || 'Default Hero File';

  const scrollToSubscribeSection = () => {
    if (subscribeSectionRef.current) {
      subscribeSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  if (loading) {
    return <div>Loading...</div>; // or any loading spinner
  }else{
    return (
      <>
        <Helmet>
          <title>Home | Music School</title>
          <meta name='description' content='It is about Home page of Music School' />
        </Helmet>
        <HeroSection heroText={heroText} heroFile={heroFile} subscribeSectionRef={subscribeSectionRef} scrollToSubscribeSection={scrollToSubscribeSection} />
        <Instructor instructorText={instructorText} instructorFile={instructorFile} />
        <AvailableCourses scrollToSubscribeSection={scrollToSubscribeSection} />
        <Cards />
        <Testimonials />
        <FAQ />
        <Subscribe subscribeSectionRef={subscribeSectionRef} />
      </>
    )
  }

}

export default Home