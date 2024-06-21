import axios, {AxiosResponse} from "axios";

import {apiAccessToken, baseURL} from "../constants";

type IRes<T> = Promise<AxiosResponse<T>>;

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${apiAccessToken}`;

    return req;
})

export type {
    IRes
}

export {
    apiService
}
