import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-moments-f-72ce153a1bda.herokuapp.com/'
axios.defaults.headers.post['Çontent-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;