import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { parse, stringify } from 'qs'
import {store} from "@/store";
import {initApp} from "@/store/reducer/appSlice";
import {initUser} from "@/store/reducer/userSlice";


export const baseUrl = import.meta.env?.["VITE_APP_"+import.meta.env.VITE_ENV.toUpperCase()+"_URL"];

/**
 * Http 默认配置
 */
const defaultConfig: AxiosRequestConfig = {
    baseURL: baseUrl + "api",
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json, text/plain, application/pdf, */*",
        "Content-Type": "application/json;charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? "",
    }
}

/**
 * Axios 实例
 */
const axiosInstance: AxiosInstance = Axios.create(defaultConfig)

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const user = store.getState().user?.user ?? undefined;
    if (user !== undefined && config.headers) {
        config.headers.Authorization = user.token_type+" "+user.access_token;
    }
    return config
}, error => {
    return errorHandler(error);
})

/**
 * 异常处理程序
 */
const errorHandler = (error: { response:AxiosResponse }): AxiosResponse => {
    const { response } = error;
    if (response && response.status) {
        const statusCode = response.data?.code ?? response.status
       if(statusCode === 401){
            const {dispatch} = store;
            dispatch(initApp());
            dispatch(initUser());
            console.log(statusCode);
            window.location.reload();
        }
    } else if (!response) {
    }
    return response;
}


/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use((response: AxiosResponse): Promise<any> => {
    const { status, statusText, data } = response;
    return data;
}, error => {
    return errorHandler(error);
})

export default axiosInstance
