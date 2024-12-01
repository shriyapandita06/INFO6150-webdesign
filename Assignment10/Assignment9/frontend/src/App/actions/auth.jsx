// import {
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     LOGOUT,
//     SET_MESSAGE
// } from './type';

// import authService from '../services/auth.service';

// export const login = (email, password) => (dispatch) => {
//     return authService.login(email, password).then(
//         (data) => {
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: {
//                     token: data.token,
//                     type: data.type,
//                 }
//             });
//             return Promise.resolve();
//         },
//         (error) => {
//             const message =
//             (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//             error.message ||
//             error.toString();

//             dispatch({
//                 type: LOGIN_FAIL,
//             });

//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: message,
//             });

//             return Promise.reject();
//         }
//     );
// };

// export const logout = () => (dispatch) => {
//     authService.logout();
  
//     dispatch({
//       type: LOGOUT,
//     });

//     return Promise.resolve();
// };

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
            // Save token, type, and email in localStorage
            localStorage.setItem('token', data.token); // Save token
            localStorage.setItem('type', data.type); // Save user type
            localStorage.setItem('email', data.email); // Save email

            // Dispatch login success
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: data.token,
                    type: data.type,
                },
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

            // Dispatch login fail
            dispatch({
                type: LOGIN_FAIL,
            });

            // Dispatch error message
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
