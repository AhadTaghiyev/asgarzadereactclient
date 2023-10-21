import React from 'react'
import './Description.scss'

const Description = ({description}) => {
    return (
        <section className='description-course'>
            <div className="container">
                <div className="description-container">
                    <h3>Description</h3>
                    <ol>
                       <li dangerouslySetInnerHTML={{ __html: description }} />
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Description