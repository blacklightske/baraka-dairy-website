import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5002/api/",
  // timeout: 5000,
});
export default API;
