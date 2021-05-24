import {
    REMOVE_SELECTED_PRODUCT,
    SELECTED_PRODUCT,
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS
} from './types';

export const setShopCategories = (categories) => {
    return {
        type: SET_SHOP_CATEGORIES,
        payload: categories
    }
}
export const setShopProducts = (products) => {
    return {
        type: SET_SHOP_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (details) => {
    return {
        type: SELECTED_PRODUCT,
        payload: details
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}