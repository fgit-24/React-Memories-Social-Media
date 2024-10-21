import axios from 'axios';

// Set axios defaults
axios.defaults.baseURL = "https://social-api-f-f73ebdfcae43.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

export default axios;