import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../mainPanel/navbar';
import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

const Review = () => {
    const shoppingItems = useSelector(state => state.user.cartProducts);

    let subtotal = 0;
    shoppingItems.map(cartProduct => {
        subtotal += cartProduct.qty * cartProduct.product.price
    })
    return (
        <div>
            <Navbar/>
            <div className='review'>
                <div className="review__container">
                    <PageTitle className='review__page-title' title='Order Review' />
                    <ReviewForm className='review__form' subtotal={subtotal}/>
                </div>
            </div>
        </div>
    )
}

export default Review;
