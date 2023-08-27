import Home from "../pages/home/Home.svelte";
import Setting from "../pages/settings/Settings.svelte";

export default {
  "/": Home,
  "/settings": Setting,
  "/settings/*": Setting,
};
