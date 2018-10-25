export class LocalStorageHelper {
    static keys = {
        ACCESS_TOKEN: "access_token",
        EXPIRE_IN: "expires_in",
        TOKEN_TYPE: "token_type",
        TENANT_ID: "tenantId"
    }
    store(key, data) {
        try {
            localStorage.setItem(
                key, data
            );
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
    load(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
}