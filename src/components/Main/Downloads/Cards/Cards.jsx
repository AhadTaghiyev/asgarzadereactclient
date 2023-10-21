import React , { useEffect, useState } from 'react'
import './Cards.scss'
import videoImage from './../../../../assets/images/Video-image.png'
import { ReactComponent as Play } from './../../../../assets/svg/Play.svg'
import { ReactComponent as FilmIcon } from './../../../../assets/icons/Film.svg'
import { ReactComponent as Download } from './../../../../assets/icons/Download.svg'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
};


const Cards = () => {
    const [courses, setCourses] = useState([]);
    const [videoDurations, setVideoDurations] = useState({});
    useEffect(() => {
        const downloadContent = async () => {
            try {
                const response = await axios.get('http://bashirja-005-site10.etempurl.com/api/v1/CourseContent/Downloads');
                console.log(response.data.items);
                setCourses(response.data.items);
            } catch (error) {
                console.error("Error downloading content:", error);
            }
        };
        downloadContent();
    }, []);
    const handleMetadataLoaded = (videoLink, event) => {
        const videoElement = event.target;
        const duration = Math.round(videoElement.duration); // round off the duration for simplicity
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`; // convert to mm:ss format

        setVideoDurations(prevDurations => ({
            ...prevDurations,
            [videoLink]: formattedDuration
        }));
    };

    const videoTitle = "Orchestral Texture Making - Promo Lecture - 1";
    const maxLength = 50;
    const truncatedTitle = truncateText(videoTitle, maxLength);
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/video')
        window.scrollTo(0, 0)
    }
    return (
        <section className='cards-downloads'>
            <div className="container">
                <ul className='cards-downloads-container'>
                    {courses?.map((course,index)=>(
  <li key={index}>
  <div className='image-side'>
  <video 
                                    width="320" 
                                    height="240" 
                                    controls
                                    onLoadedMetadata={(e) => handleMetadataLoaded(course.videoLink, e)}
                                >
                                    <source src={course.videoLink} type="video/mp4" />
                                </video>
  </div>
  <div className='info_card'>
      <div className='info_card_content'>
          <FilmIcon className='icon-film' />
          <p>{course?.title}</p>
          <span>{videoDurations[course.videoLink] || 'Loading...'}</span>
      </div>
     <a href={course.videoLink}  style={{width:"100%"}}>
     <button  onClick={() => console.log('ssllsls')}>
          <span style={{cursor:'pointer'}}>Download</span>
          <Download style={{cursor:'pointer'}} className='icon-download' />
      </button>
     </a>
  </div>
</li>

                    ))

                    }
                </ul>
            </div>
        </section>
    )
}

export default Cards