import axios from "axios";
import { baseURL } from "../constants/appConstants";

console.log("baseURL: ", baseURL);

const apiClient = axios.create({
  baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json",
});

export default apiClient;