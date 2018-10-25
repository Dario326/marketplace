import MarketplaceApi from "../api/mockMarketplaceApi";

export const LOAD_MARKETPLACE_SUCCESS = "LOAD_MARKETPLACE_SUCCESS";
export const CREATE_MARKETPLACETEMPLATE_SUCCESS = "CREATE_MARKETPLACETEMPLATE_SUCCESS";
export const UPDATE_MARKETPLACETEMPLATE_SUCCESS = "UPDATE_MARKETPLACETEMPLATE_SUCCESS";

export function loadMarketplaceSuccess(marketplace) {
    return { type: LOAD_MARKETPLACE_SUCCESS, marketplace };
}
export function createMarketplaceTemplateSuccess(marketplaceTemplate) {
    return { type: CREATE_MARKETPLACETEMPLATE_SUCCESS, marketplaceTemplate };
}
export function updateMarketplaceTemplateSuccess(marketplaceTemplate) {
    return { type: UPDATE_MARKETPLACETEMPLATE_SUCCESS, marketplaceTemplate };
}

export function loadMarketplace() {
    return function (dispatch) {
        return MarketplaceApi.getAllMarketplaceTemplates().then(marketplace => {
            dispatch(loadMarketplaceSuccess(marketplace));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createMarketplaceTemplate(marketplaceTemplate) {
    return function (dispatch) {
        return MarketplaceApi.saveMarketplaceTemplate(marketplaceTemplate).then(savedMarketplaceTemplate => {
            dispatch(createMarketplaceTemplateSuccess(savedMarketplaceTemplate));
        }).catch(error => {
            throw error;
        });
    };
}
export function updateMarketplaceTemplate(marketplaceTemplate) {
    return function (dispatch) {
        return updateMarketplaceTemplate(marketplaceTemplate).then(savedMarketplaceTemplate => {
            dispatch(updateMarketplaceTemplateSuccess(savedMarketplaceTemplate));
        }).catch(error => {
            throw error;
        });
    };
}