import { BACKEND_URL } from "@src/config.js";
import { refreshAccessToken } from "./authApi";

export const getUser = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users`, {
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await getUser();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const updateUser = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await updateUser(user);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteUser = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await deleteUser();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// S3에서 이미지 가져오기
export const getImageUrl = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    const imgBlob = await res.blob();
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
    const res = await fetch(`${BACKEND_URL}/users/image`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await uploadImage(file);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteImage = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/image`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await deleteImage();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getLikes = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/likes`, {
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await getLikes();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addLike = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/likes`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await addLike();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteLike = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/likes`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await deleteLike();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
};
