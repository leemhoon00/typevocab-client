import { BACKEND_URL } from "@src/config.js";
import { refreshAccessToken } from "./authApi";

export const createFolder = async (folderName) => {
  try {
    const res = await fetch(`${BACKEND_URL}/folders`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderName }),
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await createFolder(folderName);
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

export const getFolders = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/folders`, {
      method: "GET",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await getFolders();
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    const folders = await res.json();
    return folders;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteFolder = async (folderId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/folders/${folderId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await deleteFolder(folderId);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const createVocabulary = async (folderId, vocabularyName) => {
  try {
    const res = await fetch(`${BACKEND_URL}/vocabularies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderId, vocabularyName }),
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await createVocabulary(folderId, vocabularyName);
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

export const createWords = async (vocabularyId, words) => {
  try {
    const res = await fetch(`${BACKEND_URL}/words`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vocabularyId, words }),
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await createWords(vocabularyId, words);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getWords = async (vocabularyId) => {
  try {
    const res = await fetch(
      `${BACKEND_URL}/words?vocabularyId=${vocabularyId}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await getWords(vocabularyId);
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

export const deleteVocabulary = async (vocabularyId) => {
  try {
    const res = await fetch(`${BACKEND_URL}/vocabularies/${vocabularyId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await deleteVocabulary(vocabularyId);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getSpeech = async (word) => {
  try {
    const res = await fetch(`${BACKEND_URL}/words/${word}`, {
      method: "GET",
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await getSpeech(word);
        throw new Error("refresh토큰 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return res.body;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createProblem = async (isRandom, vocabularyIds) => {
  try {
    const res = await fetch(`${BACKEND_URL}/vocabularies/problems`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRandom, vocabularyIds }),
    });

    if (!res.ok) {
      if (res.status === 401) {
        const result = await refreshAccessToken();
        if (result) return await createProblem(isRandom, vocabularyIds);
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
