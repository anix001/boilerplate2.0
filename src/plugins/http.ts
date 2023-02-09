
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from './axios';

// import axios from '../hooks/AxiosInterceptorHook'

export const GetRequest = (url: string, config: {} = {}) => {
    return axios.get(url, config);
};

export const PostRequest = (url: string, params: {}, config = {}) => {
    return axios.post(url, params, config);
};

export const PutRequest = (url: string, params?: {}, config?: {}) => {
    //only for update not post
    return axios.put(url, params, config);
};

export const DeleteRequest = (url: string, data?: any, config: {} = {}) => {
    return axios.delete(url, {data});
};


export const PatchRequest = (url: string, data: any, config: any) => {
    return axios.patch(url, data, config);
};

