<script>
  import Router from "svelte-spa-router";
  import Sidebar from "./Sidebar.svelte";

  import Profile from "./options/Profile.svelte";
  const prefix = "/settings";

  const routes = {
    "/profile": Profile,
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-3">
      <!-- 첫 번째 세로 영역 -->
      <Sidebar />
    </div>
    <div class="col">
      <!-- 두 번째 세로 영역 -->
      <Router {routes} {prefix} />
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 2rem;
  }
</style>
