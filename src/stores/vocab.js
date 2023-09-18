import { writable } from "svelte/store";

export const folders = writable([]);

export let selectedVocab = writable(null);

export let onSpeaker = writable(true);
