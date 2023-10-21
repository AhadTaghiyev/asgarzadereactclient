import React from 'react'
import './Comments.scss'
import CommentImageFirst from './../../../../../../assets/images/ImageComment1.png'
import CommentImageTwo from './../../../../../../assets/images/ImageComment2.png'
import { ReactComponent as Quotes } from './../../../../../../assets/svg/Quotes.svg'

const Comments = () => {
    return (
        <div className='comments-payment'>
            <h5>See what others are saying...</h5>
            <ul>
                <li>
                    <div className='picture-side'>
                        <img src={CommentImageTwo} alt="image1" />
                    </div>
                    <div className='text-side'>
                        <Quotes className='quotes' />
                        <div className="text">
                            <p>This course is just so amazing and refreshing. It provided me deep knowledge of orchestration and arrangements. Lot of examples, illustrations and explanations make this course very unique. I really feel so much more confident about orchestrating my music. Very fast progress in a very short period of time. Rovshan is such a great instructor , very dedicated and resourceful. I highly recommend this course if you want to improve your orchestration skills…</p>
                            <span>— Sonia Mokhtari (USA)</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='picture-side'>
                        <img src={CommentImageFirst} alt="image1" />
                    </div>
                    <div className='text-side'>
                        <Quotes className='quotes' />
                        <div className="text">
                            <p>hi.. this is Sai Kumar from India. I learned the secrets of orchestration from Rovshan. It is a very good course. Now I am able to write scores and analyze top composer's scores..</p>
                            <span>— Sai Kumar (India)</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Comments