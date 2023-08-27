<script>
  import Router from "svelte-spa-router";
  import { rootRouter } from "./routes.js";
  import { isLoggedIn } from "@src/store.js";
  import Login from "./pages/login/Login.svelte";
  import { getCookie } from "@utils/cookieModule";
  import Navbar from "./components/Navbar.svelte";

  isLoggedIn.update((value) => {
    if (getCookie("isLoggedIn") === "true") {
      return true;
    } else {
      return false;
    }
  });
</script>

{#if $isLoggedIn}
  <Navbar />
  <Router routes={rootRouter} />
{:else}
  <Login />
{/if}

<style>
</style>
