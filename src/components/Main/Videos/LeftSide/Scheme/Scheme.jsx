import React,{useEffect} from 'react'
import './Scheme.scss'
import ProgressBar from "@ramonak/react-progress-bar";
import { ReactComponent as FilmIcon } from './../../../../../assets/icons/Film.svg'
import { ReactComponent as Resources } from './../../../../../assets/icons/Resources.svg'

const Scheme = ({ handleVideoSelect, selectedItem, isSchemeOpen, setIsSchemeOpen ,course }) => {
  const handleSchemeClose = () => {
    setIsSchemeOpen(false);
  }
  useEffect(() => {
    if (course.chapterGetDtos && course.chapterGetDtos.length > 0) {
       if(course.enrolStatus){
        const firstChapter = course.chapterGetDtos[0];
        if (firstChapter.courseContents && firstChapter.courseContents.length > 0) {
            handleVideoSelect(firstChapter.courseContents[0].id);
        }
       }else{
        handleVideoSelect(4)
       }
    }
}, []);


  return (
    <div className='scheme-modul'>
      <div className='section-top' onClick={handleSchemeClose}>
        <div className='line-gray'></div>
      </div>
      <div className='progress-info'>
        <h5>{course.title}</h5>
        <ProgressBar
          bgColor='rgba(168,97,0,1)'
          baseBgColor='rgba(34, 34, 34, 1)'
          completed={course.completePercent}
          maxCompleted={100}
          isLabelVisible={false}
          className="custom-progress-bar"
         
        />
        <span>{course.completePercent}% complete</span>
      </div>
      <div className='modul1'>
      {course.chapterGetDtos?.map(chapter => (
        <div key={chapter.id}>
          <div className="title">
            <h5>{chapter.title}</h5>
          </div>
          <ul className="lessons">
            {chapter.courseContents.map(content => (
              <li
                key={content.id}
                onClick={() => {
                  if (course.enrolStatus === false && content.isPreview === false) {
                    handleVideoSelect(4);
                  } else {
                    handleVideoSelect(content.id);
                  }
                }} // modified logic for content ID
                className={selectedItem === content.id ? "selected" : ""}
              >
                <div className='content'>
                  <FilmIcon className='icon-film' />
                  <p>{content.title}</p>
              {    (course.enrolStatus === false && content.isPreview === false) 
                    ? <span>Enroll</span> 
                   : <span>Prewiev</span>}

               
                </div>
                <ProgressBar
                  height='4px'
                  completed={40} // Modify as per the progress logic
                  maxCompleted={100}
                  isLabelVisible={false}
                  bgColor='rgba(168,97,0,1)'
                  baseBgColor='#181818'
                  className="custom-progress-bar"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Scheme