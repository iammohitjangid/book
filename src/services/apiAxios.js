import axios from 'axios';
import Cookies from 'js-cookie';
// import { rootStore } from '../store';

const API = axios.create({
  baseURL: 'https://book-management.loca.lt',
  timeout: 30000,
  headers: {},
});

const configHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + Cookies.get('authToken') || '',
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
