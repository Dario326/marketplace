import { APIHelper } from "../utilities";

export function login(loginId,password) {
    const req = {
        loginId,
        password
    };
    if (loginId === "username" && password === "abc123")
        return new Promise(function (resolve, reject) {
            resolve({ result: "SUCCESS", message: "" });
        });
    else
        return { result: "ERROR", message: "User Credentials are invalid" };
}
