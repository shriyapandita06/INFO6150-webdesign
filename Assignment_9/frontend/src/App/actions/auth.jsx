import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from './type';

import authService from '../services/auth.service';

export const login = (email, password) => (dispatch) => {
    return authService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: data.token,
                    type: data.type,
                }
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    authService.logout();
  
    dispatch({
      type: LOGOUT,
    });

    return Promise.resolve();
};