import { BACKEND_URL } from "@src/config.js";

export const createFolder = async (folderName) => {
  try {
    const res = await fetch(`${BACKEND_URL}/vocab/folder`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName }),
    });
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getFolders = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/vocab/folder`, {
      method: "GET",
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    const folders = await res.json();
    return folders;
  } catch (err) {
    console.error(err);
    return null;
  }
};
