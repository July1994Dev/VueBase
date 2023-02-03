import axios from "axios";

const apiRoute = import.meta.env.VITE_API_ROUTE;

const axiosClient = axios.create({
    baseURL: apiRoute,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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

