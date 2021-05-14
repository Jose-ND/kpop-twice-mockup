import React, {useState, useEffect } from 'react'

import Card from './card';

const Arrivals = () => {
    
    // const [arrival, setArrival] = useState([]);

    // useEffect(() => {
    //     fetch('/category').then(response => {
    //         if(response.ok){
    //             return response.json
    //         }
    //     }).then(data => setArrival(data))
    // },[])

    

    return (
        <div className='arrivals-content'>
            <div className='title-container'>
                <div>
                    Categoies
                </div>
            </div>
            <div className='arrivals-wrapper'>
                <div className='square square_one'>
                    <img className='img-card' src='http://via.placeholder.com/500x500'/>
                </div>
                <div className='square sqaure_two'>
                    <img className='img-card' src='http://via.placeholder.com/500x500'/>
                </div>
            </div>
        </div>
    )
}

export default Arrivals;
