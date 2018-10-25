import * as api from "../api/loginApi";
import { LocalStorageHelper } from "../utilities";

const LOGIN = "login/";
export const IS_LOADING = `${LOGIN}IS_LOADING`;
export const LOGIN_SUCCESS = `${LOGIN}LOGIN_SUCCESS`;
export const LOGIN_ERROR = `${LOGIN}LOGIN_ERROR`;
export const LOGOUT = `${LOGIN}LOGOUT`;

export function loginSuccess() {
    return { type: LOGIN_SUCCESS, login };
}

export function loginError() {
    return { type: LOGIN_ERROR, login };
}

export function toggleLoading(status = false) {
    return { type: IS_LOADING, status };
}

export function logout() {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
    return { type: LOGOUT, logout };
}



export function login(username, password) {
    return function (dispatch) {
        dispatch(toggleLoading(true));
        return api.login(username, password).then(response => {
            if (response.result === "SUCCESS") {
                dispatch(loginSuccess(response.result));
                dispatch(toggleLoading(false));
            } else {
                dispatch(loginError());
                dispatch(toggleLoading(false));
                throw response.message;
            }
        });
    };
}



