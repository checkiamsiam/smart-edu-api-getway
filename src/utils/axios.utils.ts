import axios, { AxiosInstance } from "axios";

export const httpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const authService: AxiosInstance = httpService(process.env.AUTH_SERVICE_URL as string);
export const coreService: AxiosInstance = httpService(process.env.CORE_SERVICE_URL as string);
