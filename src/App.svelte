<script>
  import Navbar from "./components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar></Navbar>
<Router {routes} />

<style>
</style>
