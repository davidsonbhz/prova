import { Constants } from "../strings";

export function isLoggedIn() {
    return sessionStorage.getItem(Constants.LOGIN_DATA) !== null;
}
