import { writable, readable } from "svelte/store";

export const isLoggedIn = writable(false);

export const KAKAO_CLIENT_KEY = readable("e02a78e18b607d0a323e7f882a68296e");

export const BACKEND_URL = readable("http://localhost:3000");
