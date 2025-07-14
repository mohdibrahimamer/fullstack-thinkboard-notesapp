import axios from "axios";
// yaha per axios ka global varibale banarey

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/notes/",
});

export default axiosInstance;
