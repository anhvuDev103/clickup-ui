import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

export interface ApiReponse<T = undefined> {
  message: string;
  status: string;
  result: T;
}

class Http {
  readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_ENDPOINT,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.instance.interceptors.request.use(
      (request) => {
        const accessToken = localStorage.getItem('access_token');

        const headers = {
          ...request.headers,
          Authorization: 'Bearer ' + accessToken,
        } as AxiosRequestHeaders;

        request = {
          ...request,
          headers,
        };

        return request;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
