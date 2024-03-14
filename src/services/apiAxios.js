import axios from "axios";
import CONFIG from "../config";
import { configHeadersType } from "./Type";
// import { rootStore } from '../store';

const API = axios.create({
  baseURL: CONFIG.API_URI,
  timeout: 30000,
  headers: {},
});

const configHeaders = {
  "Content-Type": "application/json",
};

API.interceptors.request.use((request) => {
  return request;
});

API.interceptors.response.use(function (response) {
  if (response.data?.isError) {
    throw response.data;
  }
  return response;
});

Object.keys(configHeaders).forEach((key) => {
  API.defaults.headers.common[key] = configHeaders[key];
});

export default API;
