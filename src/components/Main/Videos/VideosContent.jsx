import React, { useState ,useEffect} from 'react'
import './VideosContent.scss'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Header from './Header'
const VideosContent = ({id}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSchemeOpen, setIsSchemeOpen] = useState(false);
    const [isLoading, SetLoading] = useState(true);
    const [courseId, setCourseId] = useState('');
    const data = [
        {
            id: 1,
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Faucibus in ornare quam viverra orci sagittis. Consequat semper viverra nam libero justo laoreet sit amet cursus. Malesuada proin libero nunc consequat interdum varius sit amet.',
            date: 'yesterday'
        },
        {
            id: 2,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            date: 'today'
        }
    ]
    const [datas, setDatas] = useState(data)
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`http://bashirja-005-site10.etempurl.com/api/v1/Course/Get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setCourseData(data.data);
            SetLoading(false);
            handleCourseId(data.data.id)
        })
        .catch(error => console.error("API'den veri çekerken bir hata oluştu:", error));
    }, [id]);
    
    const handleVideoSelect = (index) => {
        setSelectedItem(index);
       
    };
    const handleCourseId = (id) => {
        setCourseId(id)
       
    };

    const handleSchemeOpen = () => {
        setIsSchemeOpen(true)
        window.scrollTo(0, 0)
    }
   if(isLoading){
    return (
        <>loading</>
    )
   }else{
    return (
        <>
            <Header enrolStatus={courseData.enrolStatus}/>
            <div className='general-videos-content'>
                <LeftSide
                    setIsSchemeOpen={setIsSchemeOpen}
                    handleVideoSelect={handleVideoSelect}
                    handleCourseId={handleCourseId}
                    selectedItem={selectedItem}
                    isSchemeOpen={isSchemeOpen}
                    course={courseData}
                     />
                <RightSide
                    selectedItem={selectedItem}
                    handleVideoSelect={handleVideoSelect}
                    handleSchemeOpen={handleSchemeOpen}
                    datas={datas}
                    setDatas={setDatas}
                    courseId={courseId}
                />
            </div>
        </>

    )
   }
}

export default VideosContent