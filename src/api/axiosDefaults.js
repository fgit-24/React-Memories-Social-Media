import axios from "axios";

// Set axios defaults
axios.defaults.baseURL = "https://pp5-api-f-176f17fcc3bf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Instances for request and response handling
export const axiosReq = axios.create();
export const axiosRes = axios.create();
