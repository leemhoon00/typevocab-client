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

// S3에서 이미지 가져오기
export const getImageUrl = async (url) => {
  const imgResponse = await fetch(url);
  const imgBlob = await imgResponse.blob();
  return URL.createObjectURL(imgBlob);
};

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${BACKEND_URL}/user/image`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  return await res.json();
};

export const deleteImage = async () => {
  const res = await fetch(`${BACKEND_URL}/user/image`, {
    method: "DELETE",
    credentials: "include",
  });
  return await res.json();
};
