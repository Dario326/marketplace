import { combineReducers } from "redux";
import { LOGIN_REDUCER_KEY, reducer as LoginReducer } from "./../login/reducer";


export const rootReducer = combineReducers({
    [LOGIN_REDUCER_KEY]: LoginReducer,
});