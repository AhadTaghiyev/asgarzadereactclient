import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../components/Main/Downloads/HeroSection'
import Cards from './../components/Main/Downloads/Cards'
import { fetchSettingss } from '../redux/actions/settingsActions'
import { useDispatch, useSelector } from 'react-redux';


const Downloads = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.settings)
console.log(data);
  useEffect(() => {
      dispatch(fetchSettingss());
     
  }, [dispatch]);
  const learnText = data?.data?.learnText || 'Default Hero File';
  const learnFile = data?.data?.learnFilePath || 'Default Hero File';
  

  return (
    <>
      <Helmet>
        <title>Downloads | Music School</title>
        <meta name='description' content='It is about Downloads page of Music School' />
      </Helmet>
      <HeroSection learnText={learnText}  learnFile={learnFile}/>
      <Cards />
    </>
  )
}

export default Downloads