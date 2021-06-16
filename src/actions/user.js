import { __RouterContext } from 'react-router';
import {
    USER_REQUEST,
    USER_INITIAL_STATE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    ADD_CART_PRODUCT,
    DELETE_CART_PRODUCT,
    DECREASE_CART_PRODUCT,
    INCREASE_CART_PRODUCT,
    CHANGE_QTY_CART_PRODUCT,
    SET_CART_PRODUCTS
} from './types';

export const fetchUserRequest = () => {
    return {
        type: USER_REQUEST
    }
}

export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    }
}

export const userLoginFailure = (error) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}

export const userLogout = () => {
    return { type: USER_LOGOUT }
}

export const userInitialState = () => {
    return { type: USER_INITIAL_STATE }
}

//temporary actions
export const addCartProduct = (product) => {
    return {
        type: ADD_CART_PRODUCT,
        payload: product
    }
}

export const deleteCartProduct = (key) => {
    return {
        type: DELETE_CART_PRODUCT,
        payload: key
    }
}

export const decreaseCartProduct = (id) => {
    return {
        type: DECREASE_CART_PRODUCT,
        payload: id}
}

export const increaseCartProduct = (id) => {
    return {
        type: INCREASE_CART_PRODUCT,
        payload: id}
}
//this was meant for qty adjust input tag 
export const changeQtyCartProduct = (value, id) => {
    return {
        type: CHANGE_QTY_CART_PRODUCT,
        payload: {
            value: +value,
            id
        }
    }
}

export const fetchCartProducts = () => {
    return {
        type: SET_CART_PRODUCTS,
    }
}