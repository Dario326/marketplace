import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import logger from "redux-logger";

let middleware = [thunk, reduxImmutableStateInvariant()];
if (process.env.NODE_ENV !== "production") {
    middleware = [...middleware, logger];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
