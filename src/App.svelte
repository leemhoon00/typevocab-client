<script>
  import Router from "svelte-spa-router";
  import routes from "./routes/routes.js";
  import { isLoggedIn } from "@stores/user.js";
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
  <hr />
  <Router {routes} />
{:else}
  <Login />
{/if}

<style>
  hr {
    padding-top: 1.45rem;
  }
</style>
