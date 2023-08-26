<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
  import { isLoggedIn } from "@store/store.js";
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
  <Router {routes} />
{:else}
  <Login />
{/if}

<style>
</style>
