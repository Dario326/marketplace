
import * as actions from "./actions";
export const LOGIN_REDUCER_KEY = "LOGIN";

export function reducer(state = { }, action) {
    switch (action.type) {
        case actions.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthentcated: true,
                isLoginError: false
            };
        }
        case actions.LOGIN_ERROR:
            return {
                ...state,
                isLoginError: true,
                isAuthentcated: true
            };
        case actions.IS_LOADING: {
            return {
                ...state,
                isLoading: action.status
            };
        }
        case actions.LOGOUT: {
            return {
                ...state,
                isLoginError: false,
                isAuthentcated: false,
                isLoading: false
            };
        }
        default:
            return state;
    }
}
