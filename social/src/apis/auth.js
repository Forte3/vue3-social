import { request } from "../utils/request";

export function getJwtToken() {
  return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt) {
  localStorage.setItem("jwtToken", jwt);
}

export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user)); //localStorage only stores strings
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user")); //JSON.parse converts string to object
}

export async function register(email, username, password) {
  const result = await request("/api/auth/local/register", {
    method: "POST",
    auth: false,
    body: {
      email,
      username,
      password,
      name: username
    },
  });

  setJwtToken(result.jwt);
  saveUser(result.user);
  return result.user;
}