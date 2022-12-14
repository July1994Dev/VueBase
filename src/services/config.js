import axios from "axios";

const apiRoute = import.meta.env.VITE_API_ROUTE;
console.log(apiRoute);
const axiosClient = axios.create({
    baseURL: apiRoute,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status == 401) {
            window.location.href = "/";
        }

        return Promise.reject(error);
    }
);

export { axiosClient, apiRoute };

