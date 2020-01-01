import base from 'axios';
import { apiUrl } from './app.config';
const axios = base.create({
  baseURL: apiUrl
});

axios.interceptors.request.use(config => {
  const newconf = config;
  if (localStorage.token) {
    newconf.headers.Authorization = "Bearer " + localStorage.token;
  }
  return newconf;
}, error => {
  return Promise.reject(error);
});

export default axios;
