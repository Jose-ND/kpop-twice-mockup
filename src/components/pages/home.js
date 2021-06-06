import React, { useEffect } from 'react';

import Carousel from 'react-elastic-carousel';

import Navbar from '../mainPanel/navbar';
import EmailCard from '../feed/emailCard';
import Arrivals from '../feed/arrivals'
import Categories from '../feed/categories';
import RatingReview from '../feed/ratingReview';
import axios from 'axios'

import Pic from '../../../static/assets/images/TWICE-carasoul-edited.jpg'; //sample
import Footer from '../mainPanel/footer';
import { useDispatch } from 'react-redux';
import { setShopArrivals, setShopCategories } from '../../actions/shop';




const Home = () => {
    const dispatch = useDispatch();

    const breakPoints = [
        { width: 1, itemsToShow: 1 }
    ];

    const fetchCategories = async () => {
        const responseCat = await axios
            .get('/category')
            .catch(error => {
            console.log("error:", error)
        });
        
        const responseArr = await axios
            .get('/arrivals')
            .catch(error => {
                console.log('error:', error)
            })
        console.log(responseArr)
        console.log(responseCat)
        dispatch(setShopCategories(responseCat.data))
        dispatch(setShopArrivals(responseArr.data))
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div>
            {/* <Navbar/> */}

            {/* <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={8000} >

                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>
                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>
                <img className='carousel-item' src='http://via.placeholder.com/1400x450'/>

            </Carousel> */}
            <Arrivals />
            <Categories />
            <RatingReview />
            <EmailCard/>
            <Footer />
        </div>
    )
}

export default Home;
