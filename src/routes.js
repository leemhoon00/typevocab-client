import Home from "./pages/home/Home.svelte";
import Setting from "./pages/settings/Settings.svelte";

export const rootRouter = {
  "/": Home,
  "/settings": Setting,
};

import Profile from "./pages/settings/options/Profile.svelte";

export const settingsRouter = {
  "/settings/profile": Profile,
};
