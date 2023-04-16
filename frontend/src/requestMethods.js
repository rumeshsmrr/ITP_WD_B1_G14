import axios from "axios";
const BASE_URL = "http://localhost:8070/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzM5NGM0NmM1MWExNjMxYWEyZDY2NSIsImlhdCI6MTY4MTM4MjIxOSwiZXhwIjoxNjgxOTg3MDE5fQ.Twpe3_Fa3GFjTVCus67rLVh1UhkLH7WwDiGZPu0xS2M";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
