import React from 'react'
import { useSelector } from 'react-redux';
import BluePriceTag from '../bluePriceTag';
import ReviewProducts from './reviewProducts';


const ReviewForm = ({ className }) => {
    const cartProducts = useSelector(state => state.user.cartProducts);
    
    
    const renderCartProduct = cartProducts.map(cartProduct => {
        const { product, _id, qty } = cartProduct;
        const { name, price, imageUrl } = product;
        return (
            <div className='review-product' key={_id}>
                <img className='review-product__image' src={imageUrl}/>
                <div className='review-product__title'>{name}</div>
                <div className='review-product__quantity'>{qty}</div>
                <div className='review-product__price'>{qty * price}</div>
                {/* remember to fix this to proper total */}
            </div>
        )
    })

    return (
        <div className={`${className} review-form`}>
            <div className="review-form__legend">
                <div className='review-form__legend__name'>Name</div>
                <div className='review-form__legend__quantity'>Quantity</div>
                <div className='review-form__legend__price'>Price</div>
            </div>
            
            {/* reviewproducts component */}
            <div className='review-form__products'>
                {renderCartProduct}
            </div>

            {/* <div className="review-form__line"/> */}
            {/* back button */}
            {/* checkout button */}
            <div className='review-form__details review-details'>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Subtotal</div>
                        <div className='review-detail__price'>$subtotal</div>
                    </div>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Tax</div>
                        <div className='review-detail__price'>$tax</div>
                    </div>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Shipping</div>
                        <div className='review-detail__price'>$0.00</div>
                    </div>
                    <div className='review-details__total review-detail review-detail-green'>
                        <div className='review-detail__title review-detail-green__title'>Total</div>
                        <div className='review-detail__price review-detail-green__price'>$subtotal and tax</div>
                    </div>
                </div>
        </div>
    )
}

export default ReviewForm;
