import React, { useEffect, useRef, useState } from 'react'
import "./FAQ.scss"
import Vector from "./../../../../assets/icons/VectorBottom.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from './../../../../redux/actions/questionsActions'

const FAQ = () => {
    const [expandedItems, setExpandedItems] = useState({});
    const handleItemClick = (itemId) => {
        setExpandedItems((prevExpandedItems) => ({
            ...prevExpandedItems,
            [itemId]: !prevExpandedItems[itemId], // Toggle the value for the specific itemId
        }));
    };
    const contentRef = useRef(null);
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector((state) => state.questions)
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    return (
        <section className='accordion'>
            <div className="container">
                <div className='accordion-container'>
                    <h3>
                        Frequently Asked Questions
                    </h3>
                    <h4>FAQ</h4>
                    <ul className='accordion-container_lists'>
                        {
                            isLoading ? (
                                <p> Loading...</p>
                            ) : data && data.items ? (
                                <div>
                                    {data.items.map((item) => (
                                        <li onClick={() => handleItemClick(item.id)} key={item.id}>
                                            <div className='accordion-question'>
                                                <span>{item.title}</span>
                                                <img src={Vector} alt="vector" className={expandedItems[item.id] ? 'rotate' : ''} />
                                            </div>
                                            <p ref={contentRef} style={{ maxHeight: expandedItems[item.id] ? `${contentRef.current.scrollHeight}px` : '0' }}>{item.description}</p>
                                        </li>
                                    ))}
                                </div>
                            ) : (
                                <p>No data available</p>
                            )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FAQ