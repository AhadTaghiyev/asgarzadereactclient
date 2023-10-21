import React from 'react'
import './LeftSide.scss'
import Scheme from './Scheme'

const LeftSide = ({ handleVideoSelect, selectedItem, isSchemeOpen, setIsSchemeOpen,course }) => {
    return (
        <div className={`left-content ${isSchemeOpen ? 'visible-section' : ''}`}>
            <Scheme setIsSchemeOpen={setIsSchemeOpen} selectedItem={selectedItem} handleVideoSelect={handleVideoSelect} isSchemeOpen={isSchemeOpen} course={course} />
        </div>
    )
}

export default LeftSide