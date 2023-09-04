import Home from "../pages/home/Home.svelte";
import Word from "../pages/word/Word.svelte";
import Setting from "../pages/settings/Settings.svelte";

export default {
  "/": Home,
  "/word": Word,
  "/settings": Setting,
  "/settings/*": Setting,
};
