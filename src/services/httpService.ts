import { HttpStatus } from '@constants/enums';
import { LocalStorageKey } from '@constants/localStorage';
import { RefreshTokenRequest } from '@schemas/requests/auth';
import { RefreshTokenResponse } from '@schemas/responses/auth';
import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';

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
        const accessToken = localStorage.getItem(LocalStorageKey.AccessToken);

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
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === HttpStatus.Unauthorized && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem(LocalStorageKey.RefreshToken);

            if (!refreshToken) throw new Error('Refresh Token Not Found');

            const { data } = await axios.post<never, AxiosResponse<RefreshTokenResponse>, RefreshTokenRequest>(
              `${import.meta.env.VITE_API_ENDPOINT}/auth/refresh-token`,
              {
                refresh_token: refreshToken,
              },
            );

            localStorage.setItem(LocalStorageKey.AccessToken, data.result.access_token);
            localStorage.setItem(LocalStorageKey.RefreshToken, data.result.refresh_token);

            this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + data.result.access_token;

            return this.instance(originalRequest);
          } catch (error) {
            console.error('Unable to refresh access token:', error);

            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
