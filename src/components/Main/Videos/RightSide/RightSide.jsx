import React from 'react'
import './RightSide.scss'
import PlayerSide from './PlayerSide'

const RightSide = ({ selectedItem, handleSchemeOpen, datas, setDatas,courseId }) => {
    return (
        <div className='right-content'>
            <PlayerSide
                selectedVideoId={selectedItem}
                handleSchemeOpen={handleSchemeOpen}
                datas={datas}
                setDatas={setDatas}
                courseId={courseId}
            />
        </div>
    )
}

export default RightSide