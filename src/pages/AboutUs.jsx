// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../components/Main/AboutUs/HeroSection'
import Instructor from './../components/common/Instructor'
import About from './../components/common/About'
import LearnFrom from './../components/common/LearnFrom'
import { fetchSettingss } from '../redux/actions/settingsActions'
import { useDispatch, useSelector } from 'react-redux';

const AboutUs = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.settings)
console.log(data);
  useEffect(() => {
      dispatch(fetchSettingss());
     
  }, [dispatch]);
  const aboutText = data?.data?.aboutText || 'Default Hero File';
  const aboutFile = data?.data?.aboutFilePath || 'Default Hero File';
  const learnText = data?.data?.learnText || 'Default Hero File';
  const learnFile = data?.data?.learnFilePath || 'Default Hero File';
  
  return (
    <>
      <Helmet>
        <title>About Us | Music School</title>
        <meta name='description' content='It is about About Us page of Music School' />
      </Helmet>
      <HeroSection aboutText={aboutText} aboutFile={aboutFile} />
      {/* <Instructor instructorText={instructorText} instructorFile={instructorFile} /> */}
      {/* <About aboutText={aboutText} aboutFile={aboutFile} /> */}
      <LearnFrom learnText={learnText} learnFile={learnFile} />
    </>
  )
}

export default AboutUs