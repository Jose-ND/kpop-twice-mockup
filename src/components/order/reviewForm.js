import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BluePriceTag from '../bluePriceTag';
import ReviewProducts from './reviewProducts';
import {
    changeQtyCartProduct,
    decreaseCartProduct,
    deleteCartProduct,
    increaseCartProduct
} from '../../actions/user';
import { useHistory } from 'react-router';


const ReviewForm = ({ className, subtotal }) => {
    const cartProducts = useSelector(state => state.user.cartProducts);
    const decimalTax = useSelector(state => state.shop.tax);
    const decimalShipping = useSelector(state => state.shop.shipping);
    const unfixedSubtotal = subtotal;
    const dispatch = useDispatch();
    const history = useHistory();
    
    let fixedSubtotal = unfixedSubtotal.toFixed(2)
    let tax = decimalTax.toFixed(2);
    let shipping = decimalShipping.toFixed(2);

    const unfixedTotal = subtotal + decimalShipping + decimalTax;
    let fixedTotal = unfixedTotal.toFixed(2);

    

    
    const renderCartProduct = cartProducts.map(cartProduct => {
        const { product, _id, qty } = cartProduct;
        const { name, price, imageUrl } = product;

        return (
            <div className='review-product' key={_id}>
                <img className='review-product__image' src={imageUrl}/>
                <div className='review-product__title'>{name}</div>
                <div className='review-product__quantity'>
                    <button
                        className="review-product__decrease-qty review-product__button"
                        onClick={() => dispatch(decreaseCartProduct(_id))}
                        >
                        <FontAwesomeIcon icon='minus'/>
                    </button>
                    <div className="review-product__qty">{qty}</div>
                    <button
                        className="review-product__increase-qty review-product__button"
                        onClick={() => dispatch(increaseCartProduct(_id))}
                        >
                        <FontAwesomeIcon icon='plus'/>
                    </button>
                </div>
                <BluePriceTag className='review-product__price' title={qty * price} />
                <div className="review-product__cancel" onClick={() => {dispatch(deleteCartProduct(_id))}}>
                    <FontAwesomeIcon icon='times-circle' />
                </div>
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

            <div className="review-form__line" />

            <button
                className="review-form__back form-button__button form-button__gray-button"
                onClick={() => {history.push('/')}}
                type='button'>
                Back
            </button>

            <button
                className="review-form__proceed form-button__button"
                onClick={() => { history.push('/account')}}
                type='button'>
                Proceed to Checkout
            </button>
            
            <div className='review-form__details review-details'>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Subtotal</div>
                        <div className='review-detail__price'>${fixedSubtotal}</div>
                    </div>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Tax</div>
                    <div className='review-detail__price'>${tax}</div>
                    </div>
                    <div className='review-details__subtotal review-detail'>
                        <div className='review-detail__title'>Shipping</div>
                        <div className='review-detail__price'>${shipping}</div>
                    </div>
                    <div className='review-details__total review-detail review-detail-green'>
                        <div className='review-detail__title review-detail-green__title'>Total</div>
                        <div className='review-detail__price review-detail-green__price'>${fixedTotal}</div>
                    </div>
                </div>
        </div>
    )
}

export default ReviewForm;
