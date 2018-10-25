import { LocalStorageHelper } from "./local-storage-helper";
export class APIError extends Error {
    constructor(errorObj, message) {
        super(message);
        this.errorObj = errorObj;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}

export class APIHelper {
    static GET = "get";
    static POST = "POST";
    static PUT = "PUT";
    static DELETE = "DELETE";

    static getMultipartReqHeader() {
        return "multipart/form-data";
    }

    static getGenericHeaders() {
        const localStorageHelper = new LocalStorageHelper();
        const accessToken = localStorageHelper.load(LocalStorageHelper.keys.ACCESS_TOKEN);
        const tokenType = localStorageHelper.load(LocalStorageHelper.keys.TOKEN_TYPE);
        return {
            "Authorization": `${tokenType} ${accessToken}`
        };
    }

    static baseRequest(method, endpoint, { requestBody = null, contentType = "application/json", headers = {}, throwError = true }) {
        let options = {};
        if (contentType === "multipart/form-data") {
            options = {
                method: method,
                headers: {
                    ...headers
                }
            };
        } else {
            options = {
                method: method,
                headers: {
                    "Content-Type": contentType,
                    "Accept": "application/json",
                    ...headers
                }
            };
        }
        options.body = (contentType === "application/json" && requestBody)
            ? JSON.stringify(requestBody)
            : requestBody;
        return fetch(endpoint, options)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new APIError(response, "failed");
                }
            }, function (error) {
                console.log("Error :: ", options);
                if (throwError) {
                    throw new APIError(error.response, error);
                } else {
                    return console.error("API Error generated ::: ", error);
                }
            });
    }
}