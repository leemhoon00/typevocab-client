<script>
  import { onMount } from "svelte";
  import { folders, selectedVocab } from "@stores/vocab.js";
  import { getFolders } from "@api/vocabApi";
  import Wordbook from "./sidebar/Wordbook.svelte";
  import NewFolderModal from "./components/NewFolderModal.svelte";
  import Default from "./Default.svelte";
  import Main from "./Main.svelte";

  onMount(async () => {
    const result = await getFolders();
    folders.set(result);
  });

  let vocabObject;

  selectedVocab.subscribe(async (currentValue) => {
    vocabObject = await currentValue;
    console.log("changed");
  });
</script>

<div class="box">
  <aside class="p-3">
    <div class="fs-5 fw-semibold pb-3 mb-3 border-bottom text-center">
      단어장
    </div>
    <ul class="list-unstyled">
      {#each $folders as folder}
        <Wordbook {folder} />
      {/each}
      <button
        id="newFolderButton"
        class="btn rounded hoverable"
        data-bs-toggle="modal"
        data-bs-target="#folderModal"
      >
        <img src="./images/folder-plus.svg" alt="" />새로 만들기
      </button>
    </ul>
  </aside>

  {#if !vocabObject}
    <Default />
  {:else}
    {#key vocabObject}
      <Main sendedVocab={vocabObject} />
    {/key}
  {/if}
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
    border-right: 1px solid #dee2e6;
  }

  .fw-semibold {
    font-weight: 600;
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
</style>
