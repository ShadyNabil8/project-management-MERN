import axios from "axios";
import { getToken } from "../utils/token";

export const BASE_URL = "http://localhost:3000";
const USER_BASE_URL = "/user";
const WORKSPACES_BASE_URL = "/workspaces";
export const LOGIN_ROUTE = `${USER_BASE_URL}/login`;
export const GET_USER_ROUTE = `${USER_BASE_URL}`;
export const GET_WORKSPACES_ROUTE = `${WORKSPACES_BASE_URL}`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default api;
