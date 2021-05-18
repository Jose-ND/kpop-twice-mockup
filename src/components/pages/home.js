import React from 'react';

import Carousel from 'react-elastic-carousel';

import Navbar from '../mainPanel/navbar';
import Card from '../feed/card';
import Arrivals from '../feed/arrivals'
import axios from 'axios'

import Pic from '../../../static/assets/images/TWICE-carasoul-edited.jpg'; //sample




const Home = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 }
    ];

    // const getJoke = () => {
    //     axios.get('http://127.0.0.1:5000/products').then(
    //         (response) => {
    //             console.log(response);
    //         }
    //     )
    // }

    const postPromise = fetch('products')
    

    postPromise
        .then(data => data.json())
        .then(data => {
            data.forEach((item) => {
                console.log(item.id)
                console.log(item.name);
            });
        })
        .catch((err) => {
            console.log(err)
        });
    
    
    return (
        <div>
            <Navbar/>

            <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={8000} >

                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>
                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>
                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>

            </Carousel>
           <Arrivals/>
           {/* <Card/> */}
        </div>
    )
}

export default Home;
