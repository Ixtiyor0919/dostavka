import axios from "axios";
import { useEffect } from "react";

const tokenSession = JSON.parse(sessionStorage.getItem("dostavka-cafe-token"));
const tokenLocal = JSON.parse(localStorage.getItem("dostavka-cafe-token"));
const instance = axios.create({
    baseURL: "https://project2-java.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
        // "Accept-Language": "en",
        // timeout: 30000,
        // Authorization: `Bearer ${tokenSession || tokenLocal}`,
    },
});

const AxiosInterceptor = ({ children }) => {
    useEffect(() => {
        const reqInterceptor = (req) => {
            req.headers.Authorization = `Bearer ${tokenSession || tokenLocal}`;
            return req;
        };
        const reqErrInterceptor = (error) => {
            console.error("reqErrInterceptor", error);
            return Promise.reject(error);
        };
        const resInterceptor = (response) => {
            response.headers.Authorization = `Bearer ${
                tokenSession || tokenLocal
            }`;
            return response;
        };
        const resErrInterceptor = (error) => {
            console.error("resErrInterceptor", error);
            if (error?.response?.status === 401) {
                if (sessionStorage.getItem("dostavka-cafe"))
                    sessionStorage.removeItem("dostavka-cafe", tokenSession);
                if (localStorage.getItem("dostavka-cafe")) {
                    localStorage.removeItem("dostavka-cafe", tokenLocal);
                }
                window.location.href = "/login";
            }
            return Promise.reject(error);
        };
        const reqinterceptor = instance.interceptors.request.use(
            reqInterceptor,
            reqErrInterceptor
        );
        const resinterceptor = instance.interceptors.response.use(
            resInterceptor,
            resErrInterceptor
        );
        return (
            () => instance.interceptors.request.eject(reqinterceptor),
            () => instance.interceptors.response.eject(resinterceptor)
        );
    }, []);
    return children;
};

const  avatarUrl = (photoId) => {
   return `https://project2-java.herokuapp.com/api/audit/department/user/downloadUserProfilePhoto/${photoId}`;
}

export default instance;
export { AxiosInterceptor, avatarUrl };
