import { user } from "../types/user";
import apiClient from "./apiClient";

export const getUsers = async () => {
  const response = await apiClient.get("/");
  return response.data;
}

export const addUser = async (user: user) => {
  const response = await apiClient.post("/", {
    userid: user.userid,
    name: user.name,
    age: user.age,
    class: user.class,
  });
  return response.data;
}