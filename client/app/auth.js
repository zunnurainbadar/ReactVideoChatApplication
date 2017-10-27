import { browserHistory } from "react-router";


console.log("Inside authjs");
export function requireAuth(nextState, replace) {
    console.log("This sis requireauth");
    var userInfo = localStorage.getItem("userInfo");
    console.log("This is userInfo ", userInfo);
    if (!userInfo.id) {
        console.log("No token found");
        replace({ pathname: "/login" });
    } else {

    }
}