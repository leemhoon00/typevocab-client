<script>
  import Left from "./Left.svelte";
</script>

<div class="container">
  <div class="row">
    <div class="col-4">
      <!-- 첫 번째 세로 영역 -->
      <Left />
    </div>
    <div class="col-4">
      <!-- 두 번째 세로 영역 -->
      <p>영역 2</p>
    </div>
    <div class="col-4">
      <!-- 세 번째 세로 영역 -->
      <p>영역 3</p>
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 2rem;
  }
</style>
