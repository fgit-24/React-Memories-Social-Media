import axios from 'axios';

// Set axios defaults
axios.defaults.baseURL = "https://8000-fgit24-pp5djangorestfra-8jjaed52v4m.ws.codeinstitute-ide.net/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

export default axios;