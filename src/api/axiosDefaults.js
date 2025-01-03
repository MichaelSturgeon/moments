import axios from "axios";

axios.defaults.baseURL = "https://drf-api-w-project-2b5a13ae600c.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();