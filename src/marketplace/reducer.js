
export const MARKETPLACE_REDUCER_KEY = "marketplace";

export function reducer(state = [], action) {
    switch (action.type) {
        case "LOAD_MARKETPLACE_SUCCESS":
            return action.marketplace;
        default:
            return state;
    }
}