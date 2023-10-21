import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet-async'
import General from './../components/Main/Payment'
import {useParams } from 'react-router-dom'
import PricingOption from '../../src/components/Main/Course/PricingOption'
import axios from 'axios'
const Payment = () => {
const { id } = useParams()
const [courseData, setCourseData] = useState([])
const [isLoadin,setLoading]=useState(true)
const [price,setPrice]=useState()
const [code,setCode]=useState("")

const getData = async () => {
    // await axios.get(`https://localhost:7020/api/v1/Course/GetById/${_id}`).then((res) => setCourseData(res.data));
    await axios.get(`http://bashirja-005-site10.etempurl.com/api/v1/Course/GetById/${id}`).then((res) =>{ setCourseData(res.data.data); setLoading(false);});
    
}
const handlePrice=(discountPrice)=>{
  setPrice(discountPrice);
}
const handleCode=(value)=>{
  setCode(value);
}
useEffect(() => {
    const fetchData = async () => {
        await getData();
    }

    fetchData();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(()=>{
  if (courseData && courseData.price) {
    setPrice(courseData.price);
}
},[courseData])

 if(!isLoadin){
  return (
    <>
      <Helmet>
        <title>Payment | Music School</title>
        <meta name='description' content='It is about Payment page of Music School' />
      </Helmet>
      <General  price={price} title={courseData.title} image={courseData.image}  handlePrice={handlePrice} courseId={courseData.id} code={code} handleCode={handleCode} />
      <PricingOption price={price} />
    </>
  )
 }
}

export default Payment