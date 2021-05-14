import {
    FETCH_USER_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from './types';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
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