<script>
  import Router from "svelte-spa-router";
  import Sidebar from "./Sidebar.svelte";
  import { settingsRouter } from "@src/routes.js";
</script>

<div class="container">
  <div class="row">
    <div class="col-3">
      <!-- 첫 번째 세로 영역 -->
      <Sidebar />
    </div>
    <div class="col">
      <!-- 두 번째 세로 영역 -->
      <Router routes={settingsRouter} />
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 2rem;
  }
</style>
