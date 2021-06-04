import React from 'react';
import ReactStars from "react-rating-stars-component";
import { getFormSyncWarnings } from 'redux-form';

const RatingReview = () => {
    
    
    const reactStarsAtt = {
        size: 40,
        value: 4,
        edit: false,
        color: "#c4c4c4",
        activeColor: '#f4f78a'
    };
    
    return (
        <div className='rating-review'>
            <div className='rating-review__container'>
                <div className='rating-review__content rating-review-box'>
                    <h4>reviews</h4>
                    <div className='corner-box'>
                        <div className='feed-content'>
                            <div className='text-review-box'>
                                <div className='text-container'>
                                    "the product came in just as it was described!"
                                </div>
                            </div>
                            
                        </div>
                        <div className='star-pag-box'>
                            <div className='stars'>
                                <ReactStars {...reactStarsAtt}/>
                            </div>
                            <div className='pagination'>
                                <button className='active-btn'></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingReview;
