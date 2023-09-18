import { BACKEND_URL } from "@src/config.js";
import { arrayToQueryString } from "@utils/vocabUtil.js";

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
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
