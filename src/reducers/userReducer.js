import {
    FETCH_USER_REQUEST,
    USER_INITIAL_STATE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT

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
    error: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loading: true,
                user: {}
            }
        case USER_INITIAL_STATE:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    isLoggedIn: null,
                    error: ''
                }
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
                user: {},
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state
            }
            
        default: return state;
    }
}