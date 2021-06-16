import {
    FETCH_USER_REQUEST,
    USER_INITIAL_STATE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    DELETE_CART_PRODUCT,
    DECREASE_CART_PRODUCT,
    INCREASE_CART_PRODUCT,
    CHANGE_QTY_CART_PRODUCT,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    user: {
        email: '',
        first_name: '',
        id: -1,
        last_name: '',
        isLoggedIn: null,
        password: ''
    },
    error: '',
    cartProducts: [
        {
            _id: 2,
            product: {
                category: "Java",
                category_id: 2,
                description: "Course that teaches the basic fundamentals of java programming. Best for k-12",
                id: 2,
                name: "Java Elements Course",
                price: 7.99,
                qty: 1,
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            qty: 2
        },
        {
            _id: 3,
            product: {
                category: "Meals",
                category_id: 3,
                description: "McDonald's kids meal with BTS combo special. Serves one 8-12 year old",
                id: 3,
                name: "BTS kids Happy Meal",
                price: 5.99,
                qty: 7,
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            qty: 3

        }
    ]
}


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case USER_INITIAL_STATE:
            return {
                ...state,
                loading: false
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loading: false,
                user: {
                    email: '',
                    first_name: '',
                    id: -1,
                    last_name: '',
                    isLoggedIn: null,
                    password: ''
                },
                error: ''
            }
        //temporary reducer...delete later
        case ADD_CART_PRODUCT:
            var exists = false
            const newCP = action.payload;
            var cartProducts = []
            state.cartProducts.map(cartProduct => {
                if(cartProduct._id == newCP.id) {
                    exists = true;
                    cartProduct.qty += 1;
                }
                cartProducts.push(cartProduct);
            })
            if(exists == false)  {
                cartProducts.push({
                    _id: newCP.id,
                    product: newCP,
                    qty: 1
                })
            }
            return {
                ...state,
                cartProducts: cartProducts
            }
        case DELETE_CART_PRODUCT:
            const deleteCP = action.payload
            var updateCartProducts = []
            state.cartProducts.map(cartProduct => {
                if (cartProduct._id !== deleteCP) {
                    updateCartProducts.push(cartProduct)
                }
            })
            return {
                ...state,
                cartProducts: updateCartProducts
            }
        case DECREASE_CART_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => product._id === action.payload ? {...product, qty: product.qty - 1} : product)
            }
        case INCREASE_CART_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => product._id === action.payload ? {...product, qty: product.qty + 1} : product)
            }
        //this is not needed right now
        case CHANGE_QTY_CART_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => product._id === action.payload.id ? {...product, qty: action.payload.value} : product)
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
            
        default: return state;
    }
}