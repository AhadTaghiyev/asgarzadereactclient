import React from 'react'
import "./FeelMusic.scss"
import imageEffect3 from "./../../../../assets/icons/imageEffect3.svg"
import imageEffect4 from "./../../../../assets/icons/imageEffect4.svg"

const FeelMusic = ({feelText,feelFile}) => {
    return (
        <section className='feelmusic'>
            <div className="container">
                <div className='feelmusic-container'>
                    <h3>
                        You will feel  <span className='special-header-text'>The Music</span>
                    </h3>
                    <div className="feelmusic-container_text">
                        <div className='feelmusic-container_text_about'>
                            <h2>
                                You will feel  <span className='special-header-text'>The Music</span>
                            </h2>
                            <p>
                              {feelText}
                            </p>
                            <div className='top-left'></div>
                            <div className='bottom-right'></div>
                        </div>
                        <div className='feelmusic-container_text_image'>
                            <img width={500} src={feelFile} alt="image3" />
                            <img className='effect1' src={imageEffect3} alt="effect" />
                            <img className='effect2' src={imageEffect4} alt="effect2" />
                            <div className='bottom-left'></div>
                            <div className='top-right'></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeelMusic