<script>
  import Wordbook from "./sidebar/Wordbook.svelte";
  import NewFolderModal from "./components/NewFolderModal.svelte";
</script>

<div class="box">
  <aside class="p-3">
    <div class="fs-5 fw-semibold pb-3 mb-3 border-bottom text-center">
      단어장
    </div>
    <ul class="list-unstyled">
      <Wordbook />
      <button
        id="newFolderButton"
        class="btn rounded"
        data-bs-toggle="modal"
        data-bs-target="#folderModal"
      >
        <img src="./images/folder-plus.svg" alt="" />새로 만들기
      </button>
    </ul>
  </aside>

  <main style="background-color:skyblue;">ddd</main>
</div>

<NewFolderModal />

<style>
  .box {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 6fr;
  }
  aside {
    overflow-y: auto;
  }

  .fw-semibold {
    font-weight: 600;
  }

  main {
    overflow-y: auto;
  }

  img {
    margin-right: 0.5rem;
  }
  #newFolderButton {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    border: 0;
  }

  #newFolderButton:hover {
    color: rgba(0, 0, 0, 0.85);
    background-color: #d2f4ea;
  }
</style>
