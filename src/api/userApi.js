import { BACKEND_URL } from "@src/config.js";

export const getUser = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/user`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateUser = async (user) => {
  try {
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
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteUser = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/user`, {
      method: "DELETE",
      credentials: "include",
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

// S3에서 이미지 가져오기
export const getImageUrl = async (url) => {
  try {
    const imgResponse = await fetch(url);
    const imgBlob = await imgResponse.blob();
    return URL.createObjectURL(imgBlob);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${BACKEND_URL}/user/image`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteImage = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/user/image`, {
      method: "DELETE",
      credentials: "include",
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
