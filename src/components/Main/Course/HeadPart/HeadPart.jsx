import React from 'react'
import './HeadPart.scss'

const HeadPart = ({shortInfo}) => {
    return (
        <section className='head-part-course'>
            <div className="container">
                <div className="head-part-container">
                    <div className='texts'>
                        <p>What you will learn</p>
                        <ol dangerouslySetInnerHTML={{ __html: shortInfo }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadPart