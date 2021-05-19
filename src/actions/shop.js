import {
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