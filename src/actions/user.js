import {
    USER_REQUEST,
    USER_INITIAL_STATE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT
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