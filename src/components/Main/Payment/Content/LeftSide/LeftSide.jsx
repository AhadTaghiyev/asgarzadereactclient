import React, { useEffect, useState } from 'react'
import './LeftSide.scss'
import GetStarted from './GetStarted'
import PaymentMethod from './PaymentMethod'
import BillingAddress from './BillingAddress'
import Comments from './Comments'
import Included from './Included'
import BasketArea from '../RightSide/BasketArea'
import MainAction from '../RightSide/MainAction'



const LeftSide = ({price,title,image,handlePrice,courseId,code,handleCode}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 850);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className='left-side-payment'>
            {/* <GetStarted /> */}
            {/* <PaymentMethod /> */}
            {/* <BillingAddress /> */}

            {isSmallScreen && <BasketArea price={price} title={title }image={image} handlePrice={handlePrice} courseId={courseId} code handleCode />}
            {/* {isSmallScreen && <MainAction />} */}
            {/* <Comments /> */}
            {/* <Included /> */}
        </div>
    )
}

export default LeftSide