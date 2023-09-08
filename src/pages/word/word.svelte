<script>
  import Wordbook from "./sidebar/Wordbook.svelte";
</script>

<div class="box">
  <aside>
    <div class="p-3 sidebar">
      <div class="fs-5 fw-semibold pb-3 mb-3 border-bottom text-center">
        단어장
      </div>
      <ul class="list-unstyled ps-0">
        <Wordbook />
      </ul>
    </div>
  </aside>

  <main style="background-color:skyblue;">ddd</main>
</div>

<style>
  .box {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 6fr;
  }
  aside {
    display: flex;
    height: 100%;
    overflow-y: auto;
  }

  .fw-semibold {
    font-weight: 600;
  }

  .sidebar {
    width: 100%;
  }

  main {
    width: 100%;
    overflow-y: auto;
  }
</style>
