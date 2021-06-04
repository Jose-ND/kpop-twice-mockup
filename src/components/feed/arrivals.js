import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import p1 from '../../../static/assets/images/mexican.jpg';
import p2 from '../../../static/assets/images/albums.jpg';


const Arrivals = () => {
    


    // useEffect(() => {
    //     fetch('/category').then(response => {
    //         if(response.ok){
    //             return response.json
    //         }
    //     }).then(data => setArrival(data))
    // },[])

    

    return (
        <div className='arrivals'>
            <div className='arrivals__wrapper'>
                <div className='arrivals-box'>
                    <h4>new arrivals</h4>
                    <div className='squares-wrapper'>
                        <Link to='/' className='square square__item'>
                            <img className='img-card' src='../../../static/assets/images/mexican.jpg'/>
                        </Link>
                        <Link to='/' className='square sqaure__item'>
                            <img className='img-card' src='../../../static/assets/images/mexican.jpg'/>
                        </Link>
                        <div className='square square__item'>
                            <img className='img-card' src='../../../static/assets/images/albums.jpg'/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src='../../../static/assets/images/albums.jpg'/>
                        </div>
                        <div className='square square__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square square__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals;
