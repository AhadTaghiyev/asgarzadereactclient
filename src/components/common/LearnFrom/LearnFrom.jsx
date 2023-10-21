import React, { useEffect, useState } from 'react';
import "./LearnFrom.scss";

const LearnFrom = () => {
    // Step 2: Use the useState hook to store the fetched data
    const [galleryData, setGalleryData] = useState([]);

    // Step 1: Fetch data from the API when the component mounts
    useEffect(() => {
        fetch('http://bashirja-005-site10.etempurl.com/api/v1/Galery/GetAllGaleries')
            .then(response => response.json())
            .then(data => {
                // assuming the data is an array of objects with a 'learnFile' property
                setGalleryData(data.items);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className='learnfrom'>
            <div className="container">
                <div className='learnfrom-container'>
                    <div className='learnfrom-container_text'>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }} className='learnfrom-container_text_image'>
                          
                            {
                                // Step 3: Map over the data and render the images
                                galleryData.map((item, index) => (
                                  <div key={index} style={{ width: "50%", boxSizing: 'border-box' }}>
                                 <img className='img-galery' style={{width:"100%"}} src={item.path} alt="image3" />
                                  <h1 style={{textAlign:"center",padding:"25px 5px",fontWeight:200}}>{item.text}</h1>
                                 </div>
                              
                              
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnFrom;
