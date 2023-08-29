import { BACKEND_URL } from "@src/config.js";

export const getUser = async () => {
  const res = await fetch(`${BACKEND_URL}/user`, {
    credentials: "include",
  });
  const data = await res.json();
  return data;
};

export const updateUser = async (user) => {
  const res = await fetch(`${BACKEND_URL}/user`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
};

export const deleteUser = async () => {
  const res = await fetch(`${BACKEND_URL}/user`, {
    method: "DELETE",
    credentials: "include",
  });
  return await res.json();
};
