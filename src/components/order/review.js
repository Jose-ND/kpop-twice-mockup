import React from 'react'
import Navbar from '../mainPanel/navbar';
import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

const Review = () => {
    return (
        <div>
            <Navbar/>
            <div className='review'>
                <div className="review__container">
                    <PageTitle className='review__page-title' title='Order Review' />
                    <ReviewForm className='review__form'/>
                </div>
            </div>
        </div>
    )
}

export default Review;
