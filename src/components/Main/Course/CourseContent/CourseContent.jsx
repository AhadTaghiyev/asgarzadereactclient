import React, { useState } from 'react'
import './CourseContent.scss'
import Vector from "./../../../../assets/icons/VectorBottom.svg"
import { ReactComponent as Circle } from './../../../../assets/svg/Circle.svg';
import { ReactComponent as FilmIcon } from './../../../../assets/icons/Film.svg'

const CourseContent = ({chapterCount,videoCount,chapterGetDtos}) => {
    // Use null to indicate no chapter is expanded by default
    const [activeChapter, setActiveChapter] = useState(null)

    const handleItemClick = (index) => {
        // If clicked chapter is already expanded, collapse it
        if (activeChapter === index) {
            setActiveChapter(null);
        } else {
            // Otherwise, set the active chapter to the clicked chapter
            setActiveChapter(index);
        }
    };

    return (
        <section className='course-content-course'>
            <div className="container">
                <div className="course-content">
                    <div className='course-content-head'>
                        <h5>Course content</h5>
                        <span>{chapterCount} chapters • {videoCount} lessons •total length</span>
                    </div>
                    <ul className='course-content-lists'>
                    {chapterGetDtos?.map((chapter, index) => (
<li key={index} className='list' >
<div className='list-first' onClick={() => handleItemClick(index)}>
 <div className='list-first-left-part'>
     <img src={Vector} alt="vector" className={activeChapter === index ? 'rotate' : ''} />
     <span>{chapter.title}</span>
 </div>
 <div className='list-first-right-part'>
     <span >{chapter.courseContents.length} lessons</span>
     <Circle />
     <span>6 minutes</span>
 </div>
</div>
{activeChapter === index && (
 <div className='list-second' >
     {chapter?.courseContents.map((content,key)=>(
        <div key={key} className='list-second-one'>
         <div className='list-second-one-left'>
             <FilmIcon />
             <h6>{content.title}</h6>
             <div className='vector'>
                 <img src={Vector} alt="vector" />
             </div>
         </div>
         <div className='list-second-one-right'>
             <h6><span className='special-header-text'>{content.isPreview && 'Preview'}</span></h6>
             <span>3:31</span>
         </div>
     </div>
     ))}
 </div>
)}

</li>
                    ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CourseContent
