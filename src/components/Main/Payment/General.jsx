import React from 'react'
import './General.scss'
import LeftSide from './Content/LeftSide'
import RightSide from './Content/RightSide'
import PricingOption from '../../../../src/components/Main/Course/PricingOption'

const General = ({price,title,image,handlePrice,courseId,code,handleCode}) => {
    return (
        <div className='payment-section'>
            <div className="container">
                <div className="payment-section-container">
                     <LeftSide price={price} title={title} image={image} handlePrice={handlePrice} courseId={courseId} code={code} handleCode={handleCode}/>
                    <RightSide  price={price} title={title} image={image} handlePrice={handlePrice} courseId={courseId} code={code} handleCode={handleCode} /> 
                </div>
            </div>
        </div>
    )
}

export default General