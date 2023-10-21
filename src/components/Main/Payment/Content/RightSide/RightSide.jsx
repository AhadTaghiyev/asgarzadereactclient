import React, { useEffect, useState } from 'react'
import './RightSide.scss'
import BasketArea from './BasketArea'
import MainAction from './MainAction'
const RightSide = ({price,title,image,handlePrice,courseId,code,handleCode}) => {
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
        <div className={`right-side-payment`}>
            {!isSmallScreen && <BasketArea  price={price} title={title} image={image} handlePrice={handlePrice} courseId={courseId} code={code} handleCode={handleCode} style={{ display: 'none' }} />}
            {/* {!isSmallScreen && <MainAction style={{ display: 'none' }} />} */}
        </div>
    )
}

export default RightSide