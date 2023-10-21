import React from 'react'
import './Card.scss'
import videoImage from './../../../../../assets/images/Video-image.png'
import { ReactComponent as FilmIcon } from './../../../../../assets/icons/Film.svg'
import { ReactComponent as Download } from './../../../../../assets/icons/Download.svg'
import { ReactComponent as Infinity } from './../../../../../assets/icons/Film.svg'
import { ReactComponent as Cup } from './../../../../../assets/icons/Cup.svg'
import { ReactComponent as Mobile } from './../../../../../assets/icons/Mobile.svg'
import { useNavigate } from 'react-router'

const Card = ({ courseData }) => {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/payment/${courseData.data.id}`)
        window.scrollTo(0, 0)
    }
    const handleShareClick = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: courseData?.data?.title,
                    text: courseData?.data?.description,
                    url: window.location.href,
                });
                console.log("Shared successfully");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            console.log("Web Share API not supported");
        }
    };
    return (
        <div className='course-card'>
            <div className='course-card-container'>
                <div className='video-part'>
                    <img src={videoImage} alt="video" />
                </div>
                <div className='detail-part'>
                    {
                       courseData?.data?.discountPrice === 0 ? <h5>{courseData?.data?.price}$</h5> :  <h5><del style={{textDecoration: "line-through !important"}}>{courseData?.data?.price}$</del> {courseData?.data?.discountPrice}$</h5>
                    }
                    <button className='buy-button' onClick={handleClick}>Buy this course</button>
                    <div className='includes'>
                        <p>Included in this course:</p>
                        <ul>
                            <li>
                                <FilmIcon />
                                <span>{courseData?.data?.videoCount} of video content</span>
                            </li>
                            <li>
                                <Download />
                                <span>downloadable resources</span>
                            </li>
                            <li>
                                <Infinity />
                                <span>Lifetime full access</span>
                            </li>
                            <li>
                                <Cup />
                                <span>Certificate of completion</span>
                            </li>
                            <li>
                                <Mobile />
                                <span>Access from mobile and TV</span>
                            </li>
                        </ul>
                    </div>
                    <button className='share-button' onClick={handleShareClick}>Share this course</button>
                </div>
            </div>
        </div>
    )
}

export default Card