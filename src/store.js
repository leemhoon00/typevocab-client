import { writable, readable } from "svelte/store";

export const isLoggedIn = writable(false);

export const user = writable({
  name: "",
  email: "",
  bio: "",
  company: "",
  image: "",
});
