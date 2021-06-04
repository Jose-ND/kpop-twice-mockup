import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    SET_SHOP_ARRIVALS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    products: [],
    product: {},
    arrivals: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_SHOP_ARRIVALS:
            return {
                ...state,
                arrivals: action.payload
            }
        case SELECTED_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                product: {}
            }
        default: return state;
    }
}

