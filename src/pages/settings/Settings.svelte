<script>
  import Router from "svelte-spa-router";
  import Sidebar from "./Sidebar.svelte";

  const prefix = "/settings";

  import routes from "@routes/settingRouter.js";
</script>

<div class="container">
  <div class="row">
    <div class="col-3">
      <!-- 첫 번째 세로 영역 -->
      <Sidebar />
    </div>
    <Router {routes} {prefix} />
  </div>
</div>

<style>
  .container {
    margin-top: 4rem;
  }
</style>
