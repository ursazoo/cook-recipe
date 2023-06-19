import axios from 'axios';
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

const request = axios.create({
  timeout: 5000,
})

request.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    // 此处对请求进行配置

    config.baseURL = import.meta.env.VITE_APP_CLIENT_URL;
    return config;
  },
  (error) => {
    console.log(error)
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log(response)
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      // remind users

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        [50008, 50012, 50014].includes(res.code)
      ) {
        // do something
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res;
  },
  (error) => {
    return Promise.reject({
      data: error.response.data,
      status: error.response.status,
      message: error.response.statusText
    });
  }
);

export default request;