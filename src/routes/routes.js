import Home from "../pages/home/Home.svelte";
import Vocab from "../pages/vocab/Vocab.svelte";
import Setting from "../pages/settings/Settings.svelte";

export default {
  "/": Home,
  "/vocab": Vocab,
  "/settings": Setting,
  "/settings/*": Setting,
};
