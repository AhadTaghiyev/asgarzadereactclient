import React, { useState, useEffect } from 'react';
import "./Cards.scss"


// Add all solid icons to the library


const Cards = () => {
    const [composition, setComposition] = useState([]);

    useEffect(() => {
        fetch("http:/bashirja-005-site10.etempurl.com/api/v1/Composition")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(r => setComposition(r.items))
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error.message);
            });
    }, []);

    return (
        <section className='cards-section'>
            <div className="container">
             
                <ul className='cards-section-container'>
    {composition.map((item, index) => (
        <li key={index}>
            <div className='top-side'>
                <div className='background' dangerouslySetInnerHTML={{ __html: item.icon }}>
               
                </div>
                <h6>{item.title}</h6>
            </div>
            <p>
                {item.description} 
            </p>
        </li>
    ))}
</ul>

             
            </div>
        </section>
    );
}

export default Cards;
