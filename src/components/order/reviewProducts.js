import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReviewProduct from './reviewProduct';

const ReviewProducts = (props) => {
    return (
        <div className={`${props.className} review-products`}>
            <ReviewProduct />
        </div>
    )
}

export default ReviewProducts;
