import { user } from "../types/user";
import apiClient from "./apiClient";

export const getUsers = async () => {
  const response = await apiClient.get("/getusers");
  return response.data;
}

export const addUser = async (user: user) => {
  const response = await apiClient.post("/adduser", user);
  return response.data;
}